import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './initial-cards.js';
import {openPopup, closePopup} from '../utils/utils.js';
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

function createCard(data) {
  const card = new Card(data); // Создадим экземпляр карточки
  const cardElement = card.generateCard(); // Создаём карточку и возвращаем наружу
  
  return cardElement;
}

initialCards.forEach((item) => {
  listContainer.append(createCard(item)); // Добавляем в DOM
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

function submitAddCardPopup (evt) {
  evt.preventDefault();
  const inputPlace = inputPlaceName.value;
  const inputPicture = inputPlacePicture.value;
  const newPlace = createCard({link: inputPicture, name: inputPlace});
  
  listContainer.prepend(newPlace);
  formPlace.reset();
  closePopup(overlayPlace);
}

addPlaceButton.addEventListener('click', () => {
  openPopup(overlayPlace);
  cardValidator.resetValidation();
  formPlace.reset();
});
formPlace.addEventListener('submit', submitAddCardPopup); 

// profile

const openEditProfilePopup = function () {
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


