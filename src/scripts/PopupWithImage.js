import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imageElement = this._popupElement.querySelector(
      ".modal__image-preview",
    );
    this._imageTitleElement = this._popupElement.querySelector(
      ".modal__image-title",
    );
  }

  open(name, link) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._imageTitleElement.textContent = name;

    super.open();
  }
}
