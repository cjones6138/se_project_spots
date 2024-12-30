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

const profileEditButton = document.querySelector(".profile__edit-button");
const modalCloseButton = document.querySelector(".modal__close-button");
const editModal = document.querySelector("#edit-profile-modal");

function toggleModal() {
  editModal.classList.toggle("modal__visibility");
}

profileEditButton.addEventListener("click", toggleModal);

modalCloseButton.addEventListener("click", toggleModal);
