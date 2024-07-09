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
const cardAddModal = document.querySelector("#add-modal");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitleEl = document.querySelector('.profile__title');
const profileDescriptionEl = document.querySelector(".profile__description");
const profileEditForm = profileEditModal.querySelector("#edit-profile-form");
const addCardFormEl = cardAddModal.querySelector("#add-card-form");
const cardListEl = document.querySelector(".cards__list");
const cardAddButton = document.querySelector("#add-button")
const cardAddCloseBtn = cardAddModal.querySelector(".modal__close");
const cardAddForm = document.querySelector(".modal__input_type_url");







const profileTitleInput = profileEditForm.querySelector(".modal__input_type_name");

const profileDescriptionInput = profileEditForm.querySelector(".modal__input_type_description");
const cardTitleInput = addCardFormEl.querySelector(".modal__input_type_title");
const cardUrlInput = addCardFormEl.querySelector(".modal__input_type_url");

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;




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

function getCardView(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector('.card__image');
  const cardTitleEl = cardEl.querySelector('.card__title');
  //find delete button

  //add event listener to delete button
  //cardElement.remove();

  //add click listener to the cardImage element 
  // openModal with previewImageModal

  const likeButtons = cardEl.querySelectorAll(".card__like-button");
likeButtons.forEach(likeButton => {
 likeButton.addEventListener('click', () => {
  likeButton.classList.toggle("card__like-button_active");
});
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

profileEditForm.addEventListener("submit", handleAddFormSubmit);

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = profileTitleInput.value;
  const descriptionValue = profileDescriptionInput.value;

  profileTitleEl.textContent = titleValue;
  profileDescriptionEl.textContent = descriptionValue;

  closeModal(profileEditModal);
});

function handleAddFormSubmit(event) {
  event.preventDefault();
  const titleValue = cardTitleInput.value;
  const urlValue = cardUrlInput.value;
  console.log("titleValue", titleValue);
  return console.log("urlValue", urlValue);
  const cardEl = getCardView();
  closeModal(cardAddModal);
};


initialCards.forEach(function (cardData) {
  const cardView = getCardView(cardData);
  renderCard(cardView, cardListEl);
});





