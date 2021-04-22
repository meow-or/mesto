export default class Popup {
  constructor (popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      
      this.close(openedPopup);
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    })

    this._popupElement.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    })
  }

}