import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupZoomImage = this._popup.querySelector('.popup__fotoZoom');
    this._popupTitle = this._popup.querySelector('.popup__titleZoom');
  };

  open = (title, link) => {
          this._popupZoomImage.src = link;
          this._popupTitle.textContent = title;
          this._popupZoomImage.alt = title;
          super.open();
  };
};
