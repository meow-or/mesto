import Popup from  './Popup.js';
import {fullsizeCardImage, imageCaption} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
      this._name = this.imageCaption;
      this._link = this._fullsizeCardImage;
  }

  open(link, name) {
    super.open();
    
    fullsizeCardImage.src = link;
    fullsizeCardImage.alt = name;
    imageCaption.textContent = name;

  }

  setEventListeners() {
    super.setEventListeners();
  }
  
}

