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
   const errorMessageEl = this.formEl.querySelector(`#${inputEl.id}-error`);
 inputEl.classList.remove(this._inputErrorClass);
 errorMessageEl.textContent = "";
 errorMessageEl.classList.remove(this._errorClass);
}

toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput(inputEls)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
 }

 hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
 }

 _checkInputValidity() {
  if (!_inputEl.validity.valid) {
    return showInputError(_inputEl, options);
  }
  hideInputError(inputEl, options);
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