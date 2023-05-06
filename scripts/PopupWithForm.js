import Popup from '../scripts/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, functionSubmit) {
    super(selectorPopup);
    this._functionSubmit = functionSubmit;
    this._formInput = this._popup.querySelector('.form');
    this._inputList = Array.from(this._formInput.querySelectorAll('.form__item'));
    //console.log(this.getInputValues());
   //console.log(this._formInput);
    //console.log(this._inputList);
   //console.log(this._popup);
  };
  setEventListeners() {
    super.setEventListeners();
    //console.log(this._functionSubmit);
    this._formInput.addEventListener('submit', this._functionSubmit);
    //this._formInput.addEventListener('submit', console.log("kkkk"));
    console.log(this._formInput);
  };

  getInputValues() {
   this._values = {};
   this._inputList.forEach(input => {
    //console.log(this._popup);
    //console.log(input.value);
   this._values[input.name] = input.value;
   });
   //console.log(this._inputList);
   //console.log(this._values);
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
