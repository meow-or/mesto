export {
  fullsizeCardImage,
  /*imagePopup, instead fullsizeCardImage*/
  imageCaption,
  /*overlayImage,*/
  /*overlayProfile,
  formProfile,*/
  editProfileButton,
  inputName,
  inputProfession,
  /*inputNameText,
  inputProfessionText,*/
  /*overlayPlace,*/
  addPlaceButton,
  /*formPlace,*/
  /*inputPlaceName,
  inputPlacePicture,*/
  /*listContainer,*/
  /*popups,*/
  formCardAdd,
  formProfileAdd,
  settingObject
};

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
/*const overlayImage = document.querySelector('.popup_type_image');*/
const fullsizeCardImage = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption-text');

//profile
//const overlayProfile = document.querySelector('.popup_type_profile');
//const formProfile = overlayProfile.querySelector('.popup__container');
const editProfileButton = document.querySelector('.profile__edit-button');

const inputName = document.querySelector('.popup__input[name="myname"]');
const inputProfession = document.querySelector('.popup__input[name="profession"]');

//const inputNameText = document.querySelector('.profile__title');
//const inputProfessionText = document.querySelector('.profile__subtitle');

// add-place 
const overlayPlace = document.querySelector('.popup_type_new-place');
const addPlaceButton = document.querySelector('.profile__add-button');
//const formPlace = overlayPlace.querySelector('.popup__container');
//const inputPlaceName = overlayPlace.querySelector('.popup__input[name="place-name"]');
//const inputPlacePicture = overlayPlace.querySelector('.popup__input[name="picture"]');


//const listContainer = document.querySelector('.elements__list');
//const popups = document.querySelectorAll('.popup');

const formCardAdd = document.querySelector('.popup__container[name="edit-form"]');
const formProfileAdd = document.querySelector('.popup__container[name="add-place"]');