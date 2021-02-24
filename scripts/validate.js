const settingObject = ({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: '.popup__submit-button_disabled',
  spanErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_active',
  inputErrorClass: 'popup__input_error'
});


const showInputError = (formElement, inputElement, errorMessage) => {
  
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
  inputElement.classList.add('popup__input_error');
};


const hideInputError = (formElement, inputElement) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
  inputElement.classList.remove('popup__input_error');
};


const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;

      showInputError(formElement, inputElement, errorMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};


const switchButtonLock = (inputList, buttonElement) => {
  const hasNotValidInput = inputList.some((inputElement) => !inputElement.validity.valid);

  if (hasNotValidInput) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__submit-button_disabled');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__submit-button_disabled');
  }
};



const setEventListeners = (formElement) => {
  formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit-button');

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        checkInputValidity(formElement, inputElement);
        switchButtonLock(inputList, buttonElement);
      });
    });
    switchButtonLock(inputList, buttonElement);
};


const enableValidation = ({formSelector, ...settings}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach(setEventListeners);
};


enableValidation(settingObject);




