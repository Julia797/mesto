export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._btnClose = this._popup.querySelector('.popup__btn-close');
  };

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  _handleClose = () => {
    this.close();
  }

  _handleClosePopupOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.close();
  };

  setEventListeners() {
    this._popup.addEventListener('click', this._handleClosePopupOverlay);
    this._btnClose.addEventListener('click', this._handleClose);
  }

    open() {
      this._popup.classList.add('popup_opened')
      document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    };
  };
