
const settingObject = ({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  spanErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_active',
  inputErrorClass: 'popup__input_error'
});


const showInputError = (formElement, inputElement, errorMessage, settings) => {
  
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
  inputElement.classList.add(settings.inputErrorClass);
};


const hideInputError = (formElement, inputElement, settings) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = '';
  errorElement.classList.remove(settings.errorClass);
  inputElement.classList.remove(settings.inputErrorClass);
};


const checkInputValidity = (formElement, inputElement, settings) => {
  const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;

      showInputError(formElement, inputElement, errorMessage, settings);
    } else {
      hideInputError(formElement, inputElement, settings);
    }
};


const switchButtonLock = (inputList, buttonElement, settings) => {
  const hasNotValidInput = inputList.some((inputElement) => !inputElement.validity.valid);

  if (hasNotValidInput) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};



const setEventListeners = (formElement, settings) => {
  formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        checkInputValidity(formElement, inputElement, settings);
        switchButtonLock(inputList, buttonElement, settings);
      });
    });
    switchButtonLock(inputList, buttonElement, settings);
};


const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};

enableValidation(settingObject);





