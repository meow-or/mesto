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
const overlayPlace = document.querySelector('.popup_type_new-place');
const addPlaceButton = document.querySelector('.profile__add-button');
const formPlace = overlayPlace.querySelector('.popup__container');
const placeCloseButton = overlayPlace.querySelector('.popup__close');

const inputPlaceName = overlayPlace.querySelector('.popup__input[name="place-name"]');
const inputPlacePicture = overlayPlace.querySelector('.popup__input[name="picture"]');

/* popup image */
const overlayImage = document.querySelector('.popup_type_image');
const imagePopup = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption-text');
const overlayImageCloseButton = overlayImage.querySelector('.popup__close');


/* list container & template el*/
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
  placePicture.alt = item.name;

  /* like toggle */
  const likeButton = newCard.querySelector('.elements__like');

  likeButton.addEventListener('click', function () {
      likeButton.classList.toggle('elements__like_active');
    })

  /* remove place */
  const removeButton = newCard.querySelector('.elements__bin');
  removeButton.addEventListener('click', cardRemove);

  /* open image-popup & fullsize image */
  placePicture.addEventListener('click', () => openImagePopup(item));
  
  return newCard;

}

/*  add new place*/

function cardAdd (evt) {
  evt.preventDefault();
  const inputPlace = inputPlaceName.value;
  const inputPicture = inputPlacePicture.value;
  const newPlace = getCard({link: inputPicture, name: inputPlace});
  
  listContainer.prepend(newPlace);

  formPlace.reset();

  closePopup(overlayPlace);
}

addPlaceButton.addEventListener('click', () => openPopup(overlayPlace));
placeCloseButton.addEventListener('click', () => closePopup(overlayPlace));  

formPlace.addEventListener('submit', cardAdd); 

/* open/close image popup */

function openImagePopup (item) {
  imagePopup.src = item.link;
  imagePopup.alt = item.name;
  imageCaption.textContent = item.name;
  openPopup(overlayImage);
}

overlayImageCloseButton.addEventListener('click', () => closePopup(overlayImage));


/* remove card */

function cardRemove (evt) {
    const targetButton = evt.target;
    const targetCard = targetButton.closest('.elements__item');
    targetCard.remove();
}

/* profile */

const toggleProfile = function () {
  inputName.value = inputNameText.textContent;
  inputProfession.value = inputProfessionText.textContent; 
  togglePopup(overlayProfile);
}

const saveProfile = function (evt) {
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;
  togglePopup(overlayProfile);
}

editProfileButton.addEventListener('click', toggleProfile);
profileCloseButton.addEventListener('click', toggleProfile);  


formProfile.addEventListener('submit', saveProfile); 


function togglePopup(item) {
  item.classList.toggle('popup_opened');
}

function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}


render();


