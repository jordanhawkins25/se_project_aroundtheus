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
const profileEditForm = document.querySelector("#edit-profile-form");
const cardListEl = document.querySelector(".cards__list");
const cardAddButton = document.querySelector("#add-button")
const cardAddCloseBtn = cardAddModal.querySelector(".modal__close");
const cardAddForm = document.querySelector("#add-card-form");







const profileTitleInput = profileEditForm.querySelector(".modal__input_type_name");

const profileDescriptionInput = profileEditForm.querySelector(".modal__input_type_description");

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
  imageEl.src = cardData.link;
  imageEl.alt = cardData.title;
  cardTitleEl.textContent = cardData.name;
  
  
  //add event listener delete
   // cardEl.remove();

   //add event listener image
   //open modal 
   //find image element inside modal
   //replace src with card link
   //replace alt with card title

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

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = profileTitleInput.value;
  const descriptionValue = profileDescriptionInput.value;

  profileTitleEl.textContent = titleValue;
  profileDescriptionEl.textContent = descriptionValue;

  closeModal();
});

cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;
  const cardView = getCardView({
    name,
    link
  });
  renderCard(cardView, cardListEl);
  closeModal(cardAddModal);
});

initialCards.forEach(function (cardData) {
  const cardView = getCardView(cardData);
  renderCard(cardView, cardListEl);
});

const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach(likeButton => {
 likeButton.addEventListener('click', () => {
  
})
})



