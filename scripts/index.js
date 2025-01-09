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
const editModalCloseButton = editModal.querySelector(".modal__close-button");
const editModalFormElement = document.forms["edit-profile-form"];
const editModalInputName = editModalFormElement.querySelector(
  "#profile-name-input"
);
const editModalInputDescription = editModalFormElement.querySelector(
  "#profile-description-input"
);

// New card elements
const addCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = addCardModal.querySelector(
  ".modal__close-button"
);
const addCardModalFormElement = document.forms["add-card-form"];
const addCardModalInputLink = addCardModalFormElement.querySelector(
  "#add-card-link-input"
);
const addCardModalInputName = addCardModalFormElement.querySelector(
  "#add-card-name-input"
);

// Card display elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// Modal functions
function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = editModalInputName.value;
  profileDescriptionElement.textContent = editModalInputDescription.value;

  closeModal(editModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  let card = {
    name: addCardModalInputName.value,
    link: addCardModalInputLink.value,
  };

  const cardElement = getCardElement(card);
  cardsList.prepend(cardElement);

  closeModal(addCardModal);
}

// Edit profile event listeners
editModalFormElement.addEventListener("submit", handleEditFormSubmit);

profileEditButton.addEventListener("click", () => {
  editModalInputName.value = profileNameElement.textContent;
  editModalInputDescription.value = profileDescriptionElement.textContent;
  openModal(editModal);
});

editModalCloseButton.addEventListener("click", () => {
  closeModal(editModal);
});

// New post event listeners
addCardModalFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileAddButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

// Display cards function
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardSourceEl = cardElement.querySelector(".card__image");

  cardTitleEl.textContent = data.name;
  cardSourceEl.setAttribute("src", data.link);
  cardSourceEl.setAttribute("alt", data.name);

  return cardElement;
}

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});
