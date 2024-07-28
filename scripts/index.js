const initialCards = [
  { 
    name: "San Francisco",
    link: "https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }  
];


/*Elements*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-modal");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileEditInput = profileEditModal.querySelector("#edit-profile-form");
const cardAddModal = document.querySelector("#add-modal");
const addCardInput = cardAddModal.querySelector("#add-card-form");
const cardListEl = document.querySelector(".cards__list");
const cardAddButton = document.querySelector("#add-button")
const cardAddCloseBtn = cardAddModal.querySelector(".modal__close");
const imageModal = document.querySelector(".modal-preview");
const imagePreviewCloseBtn = document.querySelector("#preview-close-btn");







const profileTitleEl = document.querySelector('.profile__title');
const profileDescriptionEl = document.querySelector(".profile__description");
const profileTitleInput = profileEditInput.querySelector(".modal__input_type_name");
const profileDescriptionInput = profileEditInput.querySelector(".modal__input_type_description");
const cardTitleInput = addCardInput.querySelector(".modal__input_type_title");
const cardUrlInput = addCardInput.querySelector(".modal__input_type_url");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const imagePreviewModal = document.querySelector(".modal-preview");



/*Functions*/
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add ("modal_opened"); 
}

function renderCard(cardEl, container) {
  container.prepend(cardEl);
}

function getCardElement(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector('.card__image');
  const cardTitleEl = cardEl.querySelector('.card__title');
  const deleteButton = cardEl.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardEl.remove();
  });
  imageEl.addEventListener("click", () => {
   imagePreviewModal.querySelector(".modal__image-preview").src = cardData.link;
   imagePreviewModal.querySelector(".modal__image-preview").alt = cardData.name;
   imagePreviewModal.querySelector(".modal__image-title").textContent = cardData.name;
   openModal(imagePreviewModal);
  });
  
  const likeButton = cardEl.querySelector(".card__like-button");
 likeButton.addEventListener('click', () => {
  likeButton.classList.toggle("card__like-button_active");
});

 
  imageEl.src = cardData.link;
  imageEl.alt = cardData.title;
  cardTitleEl.textContent = cardData.name;

  return cardEl;
}


profileEditButton.addEventListener("click", () => {
   profileTitleInput.value = profileTitleEl.textContent;
   profileDescriptionInput.value = profileDescriptionEl.textContent;

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


profileEditInput.addEventListener("submit", handleProfileEditFormSubmit);
addCardInput.addEventListener("submit", handleAddFormSubmit);



function handleProfileEditFormSubmit(event) {
  event.preventDefault();
  profileTitleEl.textContent = profileTitleInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
};

function handleAddFormSubmit(event) {
  event.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardData = { name, link };
  const cardEl = getCardElement(cardData);
  renderCard(cardEl, cardListEl);
  closeModal(cardAddModal);
}

initialCards.forEach(function (cardData) {
  const cardView = getCardElement(cardData);
  renderCard(cardView, cardListEl);
});