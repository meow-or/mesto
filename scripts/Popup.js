export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = document.querySelector(popupSelector); 
    this._popup = document.querySelector('.popup');
    this._closeButton = this._popupSelector.querySelector('.popup__close');
    this._body = document.querySelector('body');
  }

  open() {
    this._popupSelector.classList.add('popup_opened');

    this._body.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');

    this._body.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
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

    this._popupSelector.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    })
  }

}