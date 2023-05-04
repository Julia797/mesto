import Popup from '../scripts/Popup.js';

export default class PopupWithForm extends Popup{
  constructor(selectorPopup, functionSubmit) {
    super(selectorPopup);
    this._functionSubmit = functionSubmit;
    this._formInput = this._popup.querySelector('.form__input');
    this._inputList = Array.from(this._formInput.querySelectorAll('.form__item'));

  };

  _getInputValues() {
   this.values  = [];
   this._inputList.forEach(item => {
    this.values[input.name] = input.value;
   });
   return this.values
  };

  setEventListeners() {
    super.setEventListeners();
    this._formInput.addEventListener('submit', this._functionSubmit);
  };

  close() {
    super.close();
    this._formInput.reset();
  };


  };
