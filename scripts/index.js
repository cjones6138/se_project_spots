const initialCards = [
  {
    name: "Dark Eclipse",
    link: "https://unsplash.com/photos/digital-wallpaper-of-eclipse-_ok8uVzL2gI",
  },
  {
    name: "Red Sky",
    link: "https://unsplash.com/photos/shooting-star-in-night-sky-5LOhydOtTKU",
  },
  {
    name: "Green Aura",
    link: "https://unsplash.com/photos/northern-lights-during-night-time-R3pUGn5YiTg",
  },
  {
    name: "Harvest Moon",
    link: "https://unsplash.com/photos/brown-planet-QQ9MzSs-o1I",
  },
  {
    name: "Impact Crater",
    link: "https://unsplash.com/photos/a-large-crater-in-the-middle-of-a-desert-E7q00J_8N7A",
  },
  {
    name: "Shuttle Launch",
    link: "https://unsplash.com/photos/ray-of-light-near-body-of-water--p-KCm6xB9I",
  },
];

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const profileEditButton = document.querySelector(".profile__edit-button");

const modalCloseButton = document.querySelector(".modal__close-button");
const modalSubmitButton = document.querySelector(".modal__submit-button");

const editModal = document.querySelector("#edit-profile-modal");
const editModalFormElement = editModal.querySelector(".modal__form");
const editModalInputName = editModal.querySelector("#profile-name-input");
const editModalInputDescription = editModal.querySelector(
  "#profile-description-input"
);

function openModal() {
  editModal.classList.remove("modal__visibility");
  editModalInputName.value = profileNameElement.textContent;
  editModalInputDescription.value = profileDescriptionElement.textContent;
}

function closeModal() {
  editModal.classList.add("modal__visibility");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = editModalInputName.value;
  profileDescriptionElement.textContent = editModalInputDescription.value;

  closeModal();
}

// Connect the handler to the form, so it will watch for the submit event.
editModalFormElement.addEventListener("submit", handleEditFormSubmit);

profileEditButton.addEventListener("click", openModal);

modalCloseButton.addEventListener("click", closeModal);
