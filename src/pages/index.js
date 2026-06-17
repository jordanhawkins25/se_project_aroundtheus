import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import "../pages/index.css";
import { initialCards, validationSettings } from "../scripts/constants.js";
import "../vendor/normalize.css";
import "../vendor/fonts.css";
import "./index.css";

//* Elements
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-modal");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileEditForm = profileEditModal.querySelector("#edit-profile-form");

const cardAddModal = document.querySelector("#add-modal");
const addCardForm = cardAddModal.querySelector("#add-card-form");
const cardAddButton = document.querySelector("#add-button");
const cardAddCloseBtn = cardAddModal.querySelector(".modal__close");

const imageModal = document.querySelector(".modal-preview");
const imagePreviewCloseBtn = document.querySelector("#preview-close-btn");

const profileTitleInput = profileEditForm.querySelector(
  ".modal__input_type_name",
);
const profileDescriptionInput = profileEditForm.querySelector(
  ".modal__input_type_description",
);
const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

const imagePreviewModal = document.querySelector(".modal-preview");
const previewImage = imagePreviewModal.querySelector(".modal__image-preview");
const previewTitle = imagePreviewModal.querySelector(".modal__image-title");

const cardSelector = "#card-template";

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage(".modal-preview");
imagePopup.setEventListeners();

// Instantiate Form Validators
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm,
);
const addFormValidator = new FormValidator(validationSettings, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function handlePreviewClick({ link, name }) {
  imagePopup.open(name, link);
}

function createCard(cardData) {
  const card = new Card(cardData, cardSelector, handlePreviewClick);
  return card.cardView();
}

function handleEscKey(evt) {
  if (evt.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closeModal(modal);
  }
}

function handleOverlayClick(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscKey);
  modal.addEventListener("click", handleOverlayClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscKey);
  modal.removeEventListener("click", handleOverlayClick);
}

function handleProfileEditFormSubmit(event) {
  event.preventDefault();
  userInfo.setUserInfo({
    name: profileTitleInput.value,
    job: profileDescriptionInput.value,
  });
  closeModal(profileEditModal);
}

function handleAddFormSubmit(event) {
  event.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;

  const cardElement = createCard({ name, link });
  cardListSection.addItem(cardElement);

  addCardForm.reset();
  closeModal(cardAddModal);
  addFormValidator.disableSubmit();
}

const cardListSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      cardListSection.addItem(cardElement);
    },
  },
  ".cards__list",
);

cardListSection.renderItems();

profileEditButton.addEventListener("click", () => {
  const currentProfileData = userInfo.getUserInfo();
  profileTitleInput.value = currentProfileData.name;
  profileDescriptionInput.value = currentProfileData.job;
  openModal(profileEditModal);
});

cardAddButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

profileCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

cardAddCloseBtn.addEventListener("click", () => {
  closeModal(cardAddModal);
});

imagePreviewCloseBtn.addEventListener("click", () => {
  closeModal(imageModal);
});

profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);
addCardForm.addEventListener("submit", handleAddFormSubmit);
