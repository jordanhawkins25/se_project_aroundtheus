import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { initialCards, validationSettings } from "../utils/constants.js";
import "../vendor/normalize.css";
import "../vendor/fonts.css";
import "./index.css";

//* Elements
const profileEditButton = document.querySelector("#profile-edit-button");
const cardAddButton = document.querySelector("#add-button");

const profileEditForm = document.querySelector("#edit-profile-form");
const addCardForm = document.querySelector("#add-card-form");

const profileTitleInput = profileEditForm.querySelector(
  ".modal__input_type_name",
);
const profileDescriptionInput = profileEditForm.querySelector(
  ".modal__input_type_description",
);

const cardSelector = "#card-template";

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage(".modal-preview");
imagePopup.setEventListeners();

const editProfilePopup = new PopupWithForm("#profile-modal", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    job: formData.description,
  });
  editProfilePopup.closeModal();
});

editProfilePopup.setEventListeners();

const cardAddPopup = new PopupWithForm("#add-modal", (formData) => {
  const cardElement = createCard({
    name: formData.title,
    link: formData.url,
  });
  cardListSection.addItem(cardElement);

  cardAddPopup.closeModal();
  addFormValidator.disableSubmit();
});
cardAddPopup.setEventListeners();

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
  editProfilePopup.openModal();
});

cardAddButton.addEventListener("click", () => {
  cardAddPopup.openModal();
});
