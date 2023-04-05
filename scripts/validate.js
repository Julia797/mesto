const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__btn-save',
  inactiveButtonClass: 'form__btn-save_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

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
  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
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
    if (!inputElement.validity.valid) {
      hideInputError (formElement, inputElement, validationConfig.inputErrorClass, validationConfig.errorClass);
    };
  });
};
