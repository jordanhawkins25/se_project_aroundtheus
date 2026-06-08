import Modal from "./Popup.js";

class ModalWithForm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super({ modalSelector });
    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  closeModal() {
    this._modalForm.reset();
    super.closeModal();
  }
}

//index.js

const cardAddModal = new ModalWithForm("#add-modal", () => {});
cardAddModal.openModal();

cardAddModal.closeModal();
