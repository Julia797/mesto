import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, functionSubmit) {
    super(selectorPopup);
    this._functionSubmit = functionSubmit;
    this._formInput = this._popup.querySelector('.form');
    this._inputList = Array.from(this._formInput.querySelectorAll('.form__item'));
  };

  setEventListeners() {
    super.setEventListeners();
    this._formInput.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._functionSubmit(this._getInputValues());
      this.close();
    });
  };

  _getInputValues() {
   this._values = {};
   this._inputList.forEach(input => {
  this._values[input.name] = input.value;
   });
   return this._values;
  };

  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    });
  };

  close() {
    super.close();
    this._formInput.reset();
  };
};
