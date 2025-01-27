const initialCards = [
  {
    name: "Dark Eclipse",
    link: "https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Red Sky",
    link: "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Green Aura",
    link: "https://images.unsplash.com/photo-1443926818681-717d074a57af?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Harvest Moon",
    link: "https://images.unsplash.com/photo-1443456066412-3e3ea69ee37c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Impact Crater",
    link: "https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shuttle Launch",
    link: "https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Profile elements
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

// Profile edit elements
const editModal = document.querySelector("#edit-profile-modal");
const editModalFormElement = document.forms["edit-profile-form"];
const editModalInputName = editModalFormElement.querySelector(
  "#profile-name-input"
);
const editModalInputDescription = editModalFormElement.querySelector(
  "#profile-description-input"
);

// New card elements
const addCardModal = document.querySelector("#add-card-modal");

const addCardModalFormElement = document.forms["add-card-form"];
const addCardModalInputLink = addCardModalFormElement.querySelector(
  "#add-card-link-input"
);
const addCardModalInputName = addCardModalFormElement.querySelector(
  "#add-card-name-input"
);
const addCardModalSubmitButton = addCardModalFormElement.querySelector(
  ".modal__submit-button"
);

// Preview modal elements
const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");

// Card display elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// Find all of certain elements
const closeButtons = document.querySelectorAll(".modal__close-button");
const modalList = document.querySelectorAll(".modal");

// Modal functions
function openModal(modal) {
  modal.classList.add("modal_opened");
  if (modal.classList.contains("modal_opened")) {
    document.addEventListener("keydown", handleEscapeModalClose);
  }
}

function closeModal(modal) {
  modal.classList.add("modal_closed");
  document.removeEventListener("keydown", handleEscapeModalClose);
  setTimeout(() => {
    modal.classList.remove("modal_opened");
    modal.classList.remove("modal_closed");
  }, 400);
}

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

modalList.forEach((modal) => {
  modal.addEventListener("click", handleClickOverlayModalClose);
});

function handleClickOverlayModalClose(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}

function handleEscapeModalClose(evt) {
  if (evt.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closeModal(modal);
  }
}

// Edit profile functions
function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = editModalInputName.value;
  profileDescriptionElement.textContent = editModalInputDescription.value;

  closeModal(editModal);
}

editModalFormElement.addEventListener("submit", handleEditFormSubmit);

profileEditButton.addEventListener("click", () => {
  editModalInputName.value = profileNameElement.textContent;
  editModalInputDescription.value = profileDescriptionElement.textContent;
  resetValidation(
    editModalFormElement,
    [editModalInputName, editModalInputDescription],
    settings
  );
  openModal(editModal);
});

// Add card functions
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: addCardModalInputName.value,
    link: addCardModalInputLink.value,
  };

  renderCard(card);

  evt.target.reset();
  inactivateSubmitButton(addCardModalSubmitButton, settings);
  closeModal(addCardModal);
}

addCardModalFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileAddButton.addEventListener("click", () => {
  openModal(addCardModal);
});

// Display cards function
function getCardElement(data) {
  // Function elements
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardSourceEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  // Card delete button event listener
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  // Define card attributes
  cardTitleEl.textContent = data.name;
  cardSourceEl.setAttribute("src", data.link);
  cardSourceEl.setAttribute("alt", data.name);

  // Card preview event listener
  cardSourceEl.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImageEl.setAttribute("src", data.link);
    previewModalImageEl.setAttribute("alt", data.name);
    previewModalCaptionEl.textContent = data.name;
  });

  // Card like button event listener
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  return cardElement;
}

// Card creation loop from predefined object array
initialCards.forEach(function (item) {
  renderCard(item);
});

// Organize cards to page one at a time
function renderCard(item, method = "prepend") {
  const cardElement = getCardElement(item);
  cardsList[method](cardElement);
}
