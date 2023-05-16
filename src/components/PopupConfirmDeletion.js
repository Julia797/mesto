import Popup from './Popup.js';
export default class PopupConfirmDeletion extends Popup {
  constructor(selectorPopup, functionSubmit) {
    super(selectorPopup);
    this._formInput = this._popup.querySelector('.form');
    this._functionSubmit = functionSubmit;
  };

  setEventListeners() {
   super.setEventListeners();
   this._formInput.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._functionSubmit(this._element);
      //this.close();
    });
  };
  open = (element) => {
    super.open();
    this._element = element;
  };
};

