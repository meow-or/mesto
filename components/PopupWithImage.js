import Popup from  './Popup.js';
//import {fullsizeCardImage, imageCaption} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
      this._placeName = this._popupSelector.querySelector('.popup__caption-text');
      this._placePicture = this._popupSelector.querySelector('.popup__image');
  }

  open(item) {
    super.open();
    
    this._placePicture.src = item.link;
    this._placePicture.alt = item.name;
    this._placeName.textContent = item.name;
  }


  
}

