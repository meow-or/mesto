export {openPopup, closePopup};

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
