import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards } from '../utils/initial-cards.js';
import {
  overlayProfile,
  formProfile,
  editProfileButton,
  inputName,
  inputProfession,
  inputNameText,
  inputProfessionText,
  /*overlayPlace,*/
  addPlaceButton,
  formPlace,
  inputPlaceName,
  inputPlacePicture,
  listContainer,
  /*popups,*/
  formCardAdd,
  formProfileAdd,
  settingObject
} from '../utils/constants.js';




const createCard = (data) => {
  const card = new Card(data, '.template', () => {//function handleCardClick открывает полноразмерную картинку
      imagePopup.open(data)
    });
    const cardElement = card.generateCard(); //генерирует карточку (одну)

    return cardElement;
}

const cardList = new Section({ items: initialCards, renderer: (item) => { //renderer отрисовывает данные 
    const card = new Card(item, '.template', () => {
      imagePopup.open(item);
    });
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
    

  }}, '.elements__list');//селектор контейнера, куда созданная карточка добавляется 

cardList.renderItems(); //отрисовывает каждый элемент  initialCards

const newCardPopup = new PopupWithForm('.popup_type_new-place', (item) => { //function handleFormSubmit(item)
  cardList.addItem(createCard({name: item['place-name'], link: item['picture']}))
  
});
newCardPopup.setEventListeners();
/*=========================================================================================*/

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

const profilePopup = new PopupWithForm('.popup_type_profile', function handleFormSubmit() {

});


profilePopup.setEventListeners();

const userInfo = new UserInfo({userName: '.profile__title', userAbout: '.profile__subtitle'});



addPlaceButton.addEventListener('click', () => {
  newCardPopup.open();
  cardValidator.resetValidation();
  //formPlace.reset();
});


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
  //formPlace.reset();
});


formProfile.addEventListener('submit', saveProfile); 

const profileValidator = new FormValidator(settingObject, formCardAdd);
profileValidator.enableValidation();

const cardValidator = new FormValidator(settingObject, formProfileAdd);
cardValidator.enableValidation();



