import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards } from '../utils/initial-cards.js';
import {
  editProfileButton,
  inputName,
  inputProfession,
  addPlaceButton,
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


addPlaceButton.addEventListener('click', () => {
  newCardPopup.open();
  cardValidator.resetValidation();
});

// profile

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

const profilePopup = new PopupWithForm('.popup_type_profile', (values) => {// function handleFormSubmit
  userInfo.setUserInfo(values);
});

profilePopup.setEventListeners();



editProfileButton.addEventListener('click', () => { //ф-я открытия попапа + валидация формы
  
  const profileInfo = userInfo.getUserInfo();
  inputName.value = profileInfo.name;
  inputProfession.value = profileInfo.info;
  
  profilePopup.open();
  profileValidator.resetValidation();
  
});


const profileValidator = new FormValidator(settingObject, formCardAdd);
profileValidator.enableValidation();

const cardValidator = new FormValidator(settingObject, formProfileAdd);
cardValidator.enableValidation();

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
/*
const saveProfile = function (evt) {//сохранение введенных в форму данных и закрытие попапа
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;
  profilePopup.close();
}*/

//formProfile.addEventListener('submit', saveProfile); //сабмит формы

/*============================================================================================*/
/*
const openEditProfilePopup = function () {  //открываем попап с данными из разметки, вставленными  в форму
  inputName.value = inputNameText.textContent;
  inputProfession.value = inputProfessionText.textContent; 
  profilePopup.open();
  
}


editProfileButton.addEventListener('click', () => { //ф-я открытия попапа + валидация формы
  openEditProfilePopup(overlayProfile);
  profileValidator.resetValidation();
  
});

const saveProfile = function (evt) {//сохранение введенных в форму данных и закрытие попапа
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;
  profilePopup.close();
}*/

//formProfile.addEventListener('submit', saveProfile); //сабмит формы



const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10
