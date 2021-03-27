import {imagePopup, imageCaption, overlayImage, openPopup} from './main.js';

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.elements__item')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _markup. Так у других элементов появится доступ к ней.
    this._markup = this._getTemplate();

    // Добавим данные
    this._markup.querySelector('.elements__caption-text').textContent = this._name;
    this._markup.querySelector('.elements__image').src = this._link;
    this._markup.querySelector('.elements__image').alt = this._name;

    this._setEventListeners();

    return this._markup; // Вернём элемент наружу
  }

  _setEventListeners() {

    this._markup.querySelector('.elements__like').addEventListener('click', () => {
      this._likeToggle();
    })

    this._markup.querySelector('.elements__bin').addEventListener('click', () => {
      this._cardRemove();
    });

    this._markup.querySelector('.elements__image').addEventListener('click', () => {
      this._openImagePopup();
    });
  }

  _likeToggle() {//переключатель лайков
    this._markup.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _cardRemove () {// удаление карточек
    const targetCard = this._markup.querySelector('.elements__bin').closest('.elements__item');
    targetCard.remove();
  }

  _openImagePopup () {//open fullsize picture
    imagePopup.src = this._link;
    imagePopup.alt = this._name;
    imageCaption.textContent = this._name;
    openPopup(overlayImage);
  }
  
}

