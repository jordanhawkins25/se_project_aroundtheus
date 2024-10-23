class Card {

    constructor(cardData, cardSelector) {
          this._name = cardData.name;
          this._link = cardData.link;

          this._cardSelector = cardSelector
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

    _getTemplate() {
        return document.
        querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);
    }

    cardView() {
       this._element = this._getTemplate();
       
       this._setEventListeners();
    }

}

export default Card;