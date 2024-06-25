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
const profileEditModal = document.querySelector(".modal");
const profileCloseButton = document.querySelector("#modal-close-button");
const profileTitleEl = document.querySelector('.profile__title');
const profileDescriptionEl = document.querySelector(".profile__description");
const profileEditForm = document.querySelector("#edit-profile-form");
const cardListEl = document.querySelector(".cards__list");



const cardAddModal = document.querySelector("#add-modal");

const profileTitleInput = profileEditForm.querySelector(".modal__input_type_name");

const profileDescriptionInput = profileEditForm.querySelector(".modal__input_type_description");

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
/*Functions*/
function closeModal() {
  profileEditModal.classList.remove("modal_is-opened");
}

function openModal() {
  profileEditModal.classList.add ("modal_is-opened"); 
}


profileEditButton.addEventListener("click", () => {
   profileTitleInput.value = profileTitleEl.textContent;
   profileDescriptionInput.value = profileDescriptionEl.textContent;

   openModal();
});

profileCloseButton.addEventListener("click", closeModal);

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = profileTitleInput.value;
  const descriptionValue = profileDescriptionInput.value;

  profileTitleEl.textContent = titleValue;
  profileDescriptionEl.textContent = descriptionValue;

  closeModal();
});

initialCards.forEach(function (cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector('.card__image');
  const cardTitleEl = cardEl.querySelector('.card__title');
  imageEl.src = cardData.link;
  imageEl.alt = cardData.title;
  cardTitleEl.textContent = cardData.name;
  cardListEl.appendChild(cardEl);
  
});

