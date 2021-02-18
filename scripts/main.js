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

/* profile */
const overlayProfile = document.querySelector('.popup_type_profile');
const formProfile = overlayProfile.querySelector('.popup__container');
const editProfileButton = document.querySelector('.profile__edit-button');
const profileCloseButton = overlayProfile.querySelector('.popup__close');

const inputName = overlayProfile.querySelector('.popup__input[name="name"]');
const inputProfession = overlayProfile.querySelector('.popup__input[name="profession"]');

const inputNameText = document.querySelector('.profile__title');
const inputProfessionText = document.querySelector('.profile__subtitle');

/* add-place */
const addPlaceButton = document.querySelector('.profile__add-button');
const overlayPlace = document.querySelector('.popup_type_new-place');
const formPlace = overlayPlace.querySelector('.popup__container');
const placeCloseButton = overlayPlace.querySelector('.popup__close');

const inputPlaceName = overlayPlace.querySelector('.popup__input[name="place-name"]');
const inputPlacePicture = overlayPlace.querySelector('.popup__input[name="picture"]');
/*
const inputPlaceNameText = document.querySelector('.elements__caption-text');
const inputPictureLink = document.querySelector('.elements__image');*/



const listContainer = document.querySelector('.elements__list');
const templateCard = document.querySelector('.template');


function render() {
  const cards = initialCards.map(getCard);
  listContainer.append(...cards);
}

function getCard(item) {
  const newCard = templateCard.content.cloneNode(true);
  const placeName = newCard.querySelector('.elements__caption-text');
  const placePicture = newCard.querySelector('.elements__image');
  placeName.textContent = item.name;
  placePicture.src = item.link;

  return newCard;
}

function cardAdd (evt) {
  
  evt.preventDefault();

  const inputPlace = inputPlaceName.value;
  const inputPicture = inputPlacePicture.value;

  const newPlace = getCard({link: inputPicture, name: inputPlace});
  
  listContainer.prepend(newPlace);

  inputPlaceName.value = '';
  inputPlacePicture.value = '';

  togglePlace();
}

const togglePlace = function () {
  overlayPlace.classList.toggle('popup_opened');
}

addPlaceButton.addEventListener('click', togglePlace);
placeCloseButton.addEventListener('click', togglePlace);

formPlace.addEventListener('submit', cardAdd); 


render();



/* profile */

const toggleProfile = function () {
  overlayProfile.classList.toggle('popup_opened');
  inputName.value = inputNameText.textContent;
  inputProfession.value = inputProfessionText.textContent;
}

const saveProfile = function (evt) {
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;
  toggleProfile();
}

editProfileButton.addEventListener('click', toggleProfile);
profileCloseButton.addEventListener('click', toggleProfile);

formProfile.addEventListener('submit', saveProfile); 


