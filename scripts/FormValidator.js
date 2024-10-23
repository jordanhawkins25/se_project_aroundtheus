class FormValidator {

   constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector
    this._submitButtonSelector = settings.submitButtonSelector
    this._inactiveButtonClass = settings.inactiveButtonClass
    this._inputErrorClass = settings.inputErrorClass
    this._errorClass = settings.errorClass

    this._form = formEl;
 }

 _showInputError(inputEl, errorMessage) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(this._inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(this._errorClass);
 }

 toggleButtonState() {
   
  }

  hasInvalidInput() {

  }

  _checkInputValidity() {

  }

 _setEventListeners() {
    this._inputEls = [this.querySelectorAll(this._inputSelector)];
    this._submitButton = this.querySelector(this._submitButtonSelector);
 toggleButtonState(inputEls, submitButton, options);
 inputEls.forEach((inputEl) => {
   inputEl.addEventListener("input", () => {
     checkInputValidity(this, inputEl, options);
     toggleButtonState(inputEl, submitButton, options);
   });
 });
 }

 enableValidation() {
    this._form.addEventListener("siubmit", (e) => {
        e.preventDefault();
      });
      setEventListeners(formEl, options);
 }

}

export default FormValidator;
 

