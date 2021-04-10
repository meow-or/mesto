import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
//import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import { initialCards } from './initial-cards.js';
//import { openPopup, closePopup } from '../utils/utils.js';
import {
  overlayProfile,
  formProfile,
  editProfileButton,
  inputName,
  inputProfession,
  inputNameText,
  inputProfessionText,
  overlayPlace,
  addPlaceButton,
  formPlace,
  inputPlaceName,
  inputPlacePicture,
  listContainer,
  popups,
  formCardAdd,
  formProfileAdd,
  settingObject
} from '../utils/constants.js';


const cardList = new Section({ items: initialCards, renderer: (item) => {
    
    const card = new Card(item, '.template', () => {
      imagePopup.open(item.link, item.name)
    });
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  }}, '.elements__list'); 

cardList.renderItems();


const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

const profilePopup = new PopupWithForm('.popup_type_profile');
profilePopup.setEventListeners();

const newCardPopup = new PopupWithForm('.popup_type_new-place');
newCardPopup.setEventListeners();

const userInfo = new UserInfo({userName: '.profile__title', userAbout: '.profile__subtitle'});


//  add new place
function submitAddCardPopup (evt) {
  evt.preventDefault();
  const inputPlace = inputPlaceName.value;
  const inputPicture = inputPlacePicture.value;
  const newPlace = createCard({link: inputPicture, name: inputPlace});
  
  listContainer.prepend(newPlace);
  formPlace.reset();

  newCardPopup.close();
  
}

addPlaceButton.addEventListener('click', () => {
  newCardPopup.open();
  

  cardValidator.resetValidation();
  formPlace.reset();
});
formPlace.addEventListener('submit', submitAddCardPopup); 

// profile

const openEditProfilePopup = function () {
  inputName.value = inputNameText.textContent;
  inputProfession.value = inputProfessionText.textContent; 

  profilePopup.open();
  
}

const saveProfile = function (evt) {
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;

  profilePopup.close();
}

editProfileButton.addEventListener('click', () => {
  openEditProfilePopup(overlayProfile);
  profileValidator.resetValidation();
  formPlace.reset();
});
formProfile.addEventListener('submit', saveProfile); 

const profileValidator = new FormValidator(settingObject, formCardAdd);
profileValidator.enableValidation();

const cardValidator = new FormValidator(settingObject, formProfileAdd);
cardValidator.enableValidation();


/*
function createCard(data) {
  const card = new Card(data); // Создадим экземпляр карточки
  const cardElement = card.generateCard(); // Создаём карточку и возвращаем наружу
  
  return cardElement;
}

initialCards.forEach((item) => {
  listContainer.append(createCard(item)); // Добавляем в DOM
});
*/

// закрытие попапов по крестику или оверлею 
/*
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        popup.close();
      }

      if (evt.target.classList.contains('popup__close')) {
        popup.close();
      }
    })
  })*/

