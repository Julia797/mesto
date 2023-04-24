const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__btn-save',
  inactiveButtonClass: 'form__btn-save_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

/*export default*/ class FormValidator {
  constructor(validationConfig, formElement) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._formElement = formElement;
    this._inputList = formElement.querySelectorAll(this._inputSelector);
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);
  };

  enableValidation () {
    this._setEventListeners();
  };

  //setEventListeners  добавляем полям нужные обработчики:
  _setEventListeners () {
    this._inputList.forEach(inputElement => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        this._inputElement = inputElement;
        this._isValid();
        this._toggleButtonState();
      });
    });
  };

  //isValid — проверяет валидность поля, внутри вызывает showInputError или hideInputError
  _isValid () {
    console.log(this._inputElement);
    if (!this._inputElement.validity.valid) {
      this._showInputError();
    }
    else {
      this._hideInputError();
    };
  };

  //функция нахождения элемента ошибки
  _locateErrorElement () {
    this._errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    return this._errorElement;
  };

  //showInputError — показывает элемент ошибки; показ сообщения об ошибке.
  _showInputError () {
    this._errorElement = this._locateErrorElement();
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  //hideInputError — скрывает элемент ошибки;показ сообщения об ошибке.
  _hideInputError () {
    this._errorElement = this._locateErrorElement();
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  };

  _hasInvalidInput () {
    return Array.from(this._inputList).every(inputElement => inputElement.validity.valid);
  };

  _enableButton () {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  };

  _disableButton () {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  };

  _toggleButtonState () {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // кнопка не активная
      this._enableButton();
    } else {
      // иначе кнопка активная
      this._disableButton();
    };
  };

  resetErrorMessage () {
    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement;
      console.log(this);
      this._errorElement = this._locateErrorElement();
      if (!inputElement.validity.valid) {
        this._hideInputError();
      };
      this._disableButton();
    });
  };
};

const formContacts = document.querySelector('.form_contacts');
const formNewFoto = document.querySelector('.form_newFoto');
const FormContactsValidator = new FormValidator(validationConfig, formContacts);
const FormNewFotoValidator = new FormValidator(validationConfig, formNewFoto);
FormContactsValidator.enableValidation();
FormNewFotoValidator.enableValidation();



