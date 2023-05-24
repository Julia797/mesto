import Popup from './Popup.js';
export default class PopupConfirmDeletion extends Popup {
  constructor(selectorPopup, functionSubmit) {
    super(selectorPopup);
    this._formInput = this._popup.querySelector('.form');
    this._functionSubmit = functionSubmit;
    this.btnSubmit = this._formInput.querySelector('.form__btn-save');
  };

  setEventListeners() {
    super.setEventListeners();
    this._formInput.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.btnSubmit.textContent = 'Удаляется...';
      this._functionSubmit(this._element);
    });
  };
  open = (element) => {
    super.open();
    this._element = element;
  };
};

