
const settingObject = ({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  spanErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_active',
  inputErrorClass: 'popup__input_error'
});

// popup image
const fullsizeCardImage = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption-text');

//profile
const editProfileButton = document.querySelector('.profile__edit-button');
const inputName = document.querySelector('.popup__input[name="myname"]');
const inputProfession = document.querySelector('.popup__input[name="profession"]');

// add-place 
const overlayPlace = document.querySelector('.popup_type_new-place');
const addPlaceButton = document.querySelector('.profile__add-button');

const formCardAdd = document.querySelector('.popup__container[name="edit-form"]');
const formProfileAdd = document.querySelector('.popup__container[name="add-place"]');

export {
  fullsizeCardImage,
  imageCaption,
  editProfileButton,
  inputName,
  inputProfession,
  addPlaceButton,
  formCardAdd,
  formProfileAdd,
  settingObject
};
