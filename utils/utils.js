import {formPlace} from './constants.js';
export {openPopup, closePopup};

const openPopup = function (item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  formPlace.reset();
}

const closePopup = function (item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  formPlace.reset();
}

function closePopupByEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
