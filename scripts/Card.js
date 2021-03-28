import {openPopup} from '../utils/utils.js';
import {imagePopup, imageCaption, overlayImage} from '../utils/constants.js';

export default class Card {
  constructor(data, cardSelector = '.template') {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._markup = this._getTemplate();// Запишем разметку в приватное поле _markup. Так у других элементов появится доступ к ней.
    this._cardImage = this._markup.querySelector('.elements__image');
    this._cardName = this._markup.querySelector('.elements__caption-text');
    this._likeButton = this._markup.querySelector('.elements__like');
    this._removeCardButton = this._markup.querySelector('.elements__bin');
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
    // Добавим данные
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._markup; // Вернём элемент наружу
  }

  _setEventListeners() {

    this._likeButton.addEventListener('click', () => {
      this._likeToggle();
    })

    this._removeCardButton.addEventListener('click', () => {
      this._cardRemove();
    });

    this._cardImage.addEventListener('click', () => {
      this._openImagePopup();
    });
  }

  _likeToggle() {//переключатель лайков
    this._likeButton.classList.toggle('elements__like_active');
  }

  _cardRemove () {// удаление карточек
    const targetCard = this._removeCardButton.closest('.elements__item');
    targetCard.remove();
  }

  _openImagePopup () {//open fullsize picture
    imagePopup.src = this._link;
    imagePopup.alt = this._name;
    imageCaption.textContent = this._name;
    openPopup(overlayImage);
  }
  

}

