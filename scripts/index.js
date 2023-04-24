import { initialCards } from './kard.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popup = document.querySelector('.popup');
const popupContacts = document.querySelector('.popup_contacts');
const popupNewFoto = document.querySelector('.popup_newFoto');
const popupZoom = document.querySelector('.popup_zoom');
const btnEdit = document.querySelector('.profile__btn-edit');
const btnPlus = document.querySelector('.profile__btn-plus');
const btnsClose = document.querySelectorAll('.popup__btn-close');
const nameInput = popupContacts.querySelector('.form__item_type_name');
const infoInput = popupContacts.querySelector('.form__item_type_contact');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupFotoZoom = popupZoom.querySelector('.popup__fotoZoom');
const popupTitle = popupZoom.querySelector('.popup__titleZoom');
const element = document.querySelector('.element');
const nameNewFoto = popupNewFoto.querySelector('.form__item_type_nameFoto');
const linkNewFoto = popupNewFoto.querySelector('.form__item_type_newFoto');
const popups = document.querySelectorAll('.popup');
const inputListContacts = Array.from(popupContacts.querySelectorAll('.form__item'));
const btnSubmitContacts = popupContacts.querySelector('.form__btn-save');
const inputListNewFoto = Array.from(popupNewFoto.querySelectorAll('.form__item'));
const btnSubmitNewFoto = popupNewFoto.querySelector('.form__btn-save');
const formContacts = document.querySelector('.form_contacts');
const formNewFoto = document.querySelector('.form_newFoto');

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__btn-save',
  inactiveButtonClass: 'form__btn-save_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
};

function openPopup(item) {
  item.classList.add('popup_opened')
  document.addEventListener('keydown', closeEsc);
};

function closeEsc (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

btnEdit.addEventListener('click', function () {
  formContacts.reset();
  FormContactsValidator.resetErrorMessage();
  nameInput.value = profileTitle.textContent;
  infoInput.value = profileSubtitle.textContent;
  openPopup(popupContacts);
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;
  closePopup(popupContacts);
};

formContacts.addEventListener('submit', handleFormSubmit);

btnsClose.forEach(function(item) {
  item.addEventListener('click', function () {
    const itemPopup = item.closest('.popup');
    closePopup(itemPopup);
  });
});

btnPlus.addEventListener('click', function () {
  formNewFoto.reset();
  FormNewFotoValidator.resetErrorMessage();
  openPopup(popupNewFoto);
});

  const openZoomFoto = function(title, link) {
  popupFotoZoom.src = link;
  popupTitle.textContent = title;
  popupFotoZoom.alt = title;
  openPopup(popupZoom);
}

const selectorTemplate = '#card-template';

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.name, item.link, selectorTemplate, openZoomFoto);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  // Добавляем в DOM
  document.querySelector('.element').append(cardElement);
});

const FormContactsValidator = new FormValidator(validationConfig, formContacts);
const FormNewFotoValidator = new FormValidator(validationConfig, formNewFoto);
FormContactsValidator.enableValidation();
FormNewFotoValidator.enableValidation();

function handleNewFotoSubmit (evt) {
  evt.preventDefault();
  const card = new Card(nameNewFoto.value, linkNewFoto.value, selectorTemplate, openZoomFoto);
  const cardElement = card.generateCard();
  document.querySelector('.element').prepend(cardElement);
  closePopup(popupNewFoto);
};

formNewFoto.addEventListener('submit', handleNewFotoSubmit);

function closePopupOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.currentTarget);
};

popups.forEach(function(popup) {
  popup.addEventListener('mousedown', closePopupOverlay);
});
