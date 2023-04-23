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

//enableValidation(validationConfig);

//setEventListeners  добавляем полям нужные обработчики:
_setEventListeners () {
  this._inputList.forEach(inputElement => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      this._inputElement = inputElement;
      this._isValid();
      //console.log(this._inputElement);
      //this._toggleButtonState();
    });
  });
};

//isValid — проверяет валидность поля, внутри вызывает showInputError или hideInputError
_isValid () {
  console.log(this._inputElement);
  if (!this._inputElement.validity.valid) {

    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    this._showInputError();
  }
  else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
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
  console.log(this._errorElement);
  console.log(this._errorMessage);
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

/*
_hasInvalidInput () {
  // проходим по массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
};*/
};

//const popupContacts = document.querySelector('.popup_contacts');
//const popupNewFoto = document.querySelector('.popup_newFoto');
const formContacts = document.querySelector('.form_contacts');
const formNewFoto = document.querySelector('.form_newFoto');
const FormContactsValidator = new FormValidator(validationConfig, formContacts);
const FormNewFotoValidator = new FormValidator(validationConfig, formNewFoto);
console.log(FormContactsValidator);
FormContactsValidator.enableValidation();
FormNewFotoValidator.enableValidation();


/*_toggleButtonState () {
  // Если есть хотя бы один невалидный инпут
  if (_hasInvalidInput()) {
    // кнопка не активная
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  } else {
    // иначе кнопка активная
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  };
};

resetErrorMessage (formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig.inputErrorClass, validationConfig.errorClass);
  });
};*/




/*
//enableValidation находит и перебирает все формы на странице:
function enableValidation ({ formSelector, ...rest }) {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, rest);
  });
};

enableValidation(validationConfig);

//setEventListeners  примает параметром элемент формы и добавляет её полям нужные обработчики:
function setEventListeners (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      isValid(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

//isValid — проверяет валидность поля, внутри вызывает showInputError или hideInputError
function isValid (formElement, inputElement, rest) {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage, rest.inputErrorClass, rest.errorClass);
  }
  else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement, rest.inputErrorClass, rest.errorClass);
  };
};

//функция нахождения элемента ошибки
function locateErrorElement (formElement, inputElement) {
  errorElement = formElement.querySelector(`.${inputElement.id}-error`);
 return errorElement;
};

//showInputError — показывает элемент ошибки; показ сообщения об ошибке.
function showInputError (formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
  const errorElement = locateErrorElement(formElement, inputElement);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

//hideInputError — скрывает элемент ошибки;показ сообщения об ошибке.
function hideInputError (formElement, inputElement, inputErrorClass, errorClass) {
  const errorElement = locateErrorElement(formElement, inputElement);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

function hasInvalidInput (inputList) {
  // проходим по массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
};

function toggleButtonState (inputList, buttonElement, inactiveButtonClass) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // кнопка не активная
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    // иначе кнопка активная
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  };
};

function resetErrorMessage (formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig.inputErrorClass, validationConfig.errorClass);
  });
};*/
