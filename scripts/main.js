
import Card from './Card.js';
import FormValidator from './FormValidator.js';
export {imagePopup, imageCaption, overlayImage, openPopup};

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// profile
const overlayProfile = document.querySelector('.popup_type_profile');
const formProfile = overlayProfile.querySelector('.popup__container');
const editProfileButton = document.querySelector('.profile__edit-button');

const inputName = overlayProfile.querySelector('.popup__input[name="name"]');
const inputProfession = overlayProfile.querySelector('.popup__input[name="profession"]');

const inputNameText = document.querySelector('.profile__title');
const inputProfessionText = document.querySelector('.profile__subtitle');

// add-place 
const overlayPlace = document.querySelector('.popup_type_new-place');
const addPlaceButton = document.querySelector('.profile__add-button');
const formPlace = overlayPlace.querySelector('.popup__container');
const inputPlaceName = overlayPlace.querySelector('.popup__input[name="place-name"]');
const inputPlacePicture = overlayPlace.querySelector('.popup__input[name="picture"]');

// popup image
const overlayImage = document.querySelector('.popup_type_image');
const imagePopup = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption-text');

const listContainer = document.querySelector('.elements__list');
const popups = document.querySelectorAll('.popup');

const formCardAdd = document.querySelector('.popup__container[name="edit-form"]');
const formProfileAdd = document.querySelector('.popup__container[name="add-place"]');

function newCard(data) {
  const card = new Card(data, '.template'); // Создадим экземпляр карточки
  const cardElement = card.generateCard(); // Создаём карточку и возвращаем наружу
  return cardElement;
}

initialCards.forEach((item) => {
  listContainer.append(newCard(item)); // Добавляем в DOM
})

// закрытие попапов по крестику или оверлею 

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }

      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
    })
  })

//  add new place

function cardAdd (evt) {
  evt.preventDefault();
  const inputPlace = inputPlaceName.value;
  const inputPicture = inputPlacePicture.value;
  const newPlace = newCard({link: inputPicture, name: inputPlace});
  
  listContainer.prepend(newPlace);
  formPlace.reset();
  closePopup(overlayPlace);
}

addPlaceButton.addEventListener('click', () => openPopup(overlayPlace));
formPlace.addEventListener('submit', cardAdd); 


// profile

const editProfile = function () {
  inputName.value = inputNameText.textContent;
  inputProfession.value = inputProfessionText.textContent; 
  openPopup(overlayProfile);
}

const saveProfile = function (evt) {
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;
  closePopup(overlayProfile);
}

editProfileButton.addEventListener('click', () => editProfile(overlayProfile));
formProfile.addEventListener('submit', saveProfile); 


const openPopup = function (item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

const closePopup = function (item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}


function closePopupByEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const settingObject = ({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  spanErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_active',
  inputErrorClass: 'popup__input_error'
});

  const profileValidator = new FormValidator(settingObject, formCardAdd).enableValidation();
  const cardValidator = new FormValidator(settingObject, formProfileAdd).enableValidation();
  
