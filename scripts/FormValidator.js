
export default class FormValidator{
  constructor(settingObject, formElement) {
    this._formSelector = settingObject.formSelector;
    this._inputSelector = settingObject.inputSelector;
    this._submitButtonSelector = settingObject.submitButtonSelector;
    this._inactiveButtonClass = settingObject.inactiveButtonClass;
    this._spanErrorClass = settingObject.spanErrorClass;
    this._errorClass = settingObject.errorClass;
    this._inputErrorClass = settingObject.inputErrorClass;
    this._formElement = formElement;
  }

    _showInputError(inputElement, errorMessage) {
    
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
  };

    _hideInputError(inputElement) {

      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

      errorElement.textContent = '';
      errorElement.classList.remove(this._errorClass);
      inputElement.classList.remove(this._inputErrorClass);
  };

    _checkInputValidity(inputElement) {
      const isInputNotValid = !inputElement.validity.valid;

      if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;

        this._showInputError(inputElement, errorMessage);
      } else {
        this._hideInputError(inputElement);
      }
  };

    _switchButtonLock() {
      const hasNotValidInput = this._inputList.some((inputElement) => !inputElement.validity.valid);

    if (hasNotValidInput) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

    _setEventListeners () {

      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));


      this._inputList.forEach((inputElement) => {

        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._switchButtonLock();
        });
      });
      this._switchButtonLock();
  };


    enableValidation () {
      this._setEventListeners();
  };

}






