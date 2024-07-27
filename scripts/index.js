const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },    
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  { 
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  }    
];

/*Elements*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-modal");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileEditForm = profileEditModal.querySelector("#edit-profile-form");
const cardAddModal = document.querySelector("#add-modal");
const addCardFormEl = cardAddModal.querySelector("#add-card-form");
const cardListEl = document.querySelector(".cards__list");
const cardAddButton = document.querySelector("#add-button")
const cardAddCloseBtn = cardAddModal.querySelector(".modal__close");
const cardAddForm = document.querySelector(".modal__input_type_url");
const imagePreviewCloseBtn = document.querySelector("#preview-close-btn");







const profileTitleEl = document.querySelector('.profile__title');
const profileDescriptionEl = document.querySelector(".profile__description");
const profileTitleInput = profileEditForm.querySelector(".modal__input_type_name");
const profileDescriptionInput = profileEditForm.querySelector(".modal__input_type_description");
const cardTitleInput = addCardFormEl.querySelector(".modal__input_type_title");
const cardUrlInput = addCardFormEl.querySelector(".modal__input_type_url");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const imagePreviewModal = document.querySelector(".modal__image-preview");
const imageModal = document.querySelector(".modal_image-preview");


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

  openModal(imageEl);
  
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


profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);
addCardFormEl.addEventListener("submit", handleAddFormSubmit);



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