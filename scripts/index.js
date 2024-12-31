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

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const profileEditButton = document.querySelector(".profile__edit-button");

const editModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton = editModal.querySelector(".modal__close-button");

const editModalFormElement = document.forms["edit-profile"];
const editModalInputName = editModalFormElement.querySelector(
  "#profile-name-input"
);
const editModalInputDescription = editModalFormElement.querySelector(
  "#profile-description-input"
);

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

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

function openModal() {
  editModal.classList.add("modal_opened");
  editModalInputName.value = profileNameElement.textContent;
  editModalInputDescription.value = profileDescriptionElement.textContent;
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = editModalInputName.value;
  profileDescriptionElement.textContent = editModalInputDescription.value;

  closeModal();
}

editModalFormElement.addEventListener("submit", handleEditFormSubmit);

profileEditButton.addEventListener("click", openModal);

editModalCloseButton.addEventListener("click", closeModal);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
