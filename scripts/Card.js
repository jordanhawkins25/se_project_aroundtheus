class Card {

    constructor(cardData, cardSelector) {
          this._name = cardData.name;
          this._link = cardData.link;

          this._likeButton = this

          this._cardSelector = cardSelector
    }

    _getTemplate() {
        const cardEl = document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);

        return cardEl;
    }

    _setEventListeners() {
        imageEl.addEventListener("click", () => {
            imagePreviewModal.querySelector(".modal__image-preview").src =
              cardData.link;
            imagePreviewModal.querySelector(".modal__image-preview").alt =
              cardData.name;
            imagePreviewModal.querySelector(".modal__image-title").textContent =
              cardData.name;
            openModal(imagePreviewModal);
          });

          likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("card__like-button_active");
          });
        
          deleteButton.addEventListener("click", () => {
            cardEl.remove();
          });
    }


    cardView() {
       this._element = this._getTemplate();
      
       this._setEventListeners();

       this._element.querySelector(
        ".imageEl"
       ).style =   `url(${this._link}`;
        this._element.querySelector(".card__title").textContent = this._text;
       
    }

}

export default Card;