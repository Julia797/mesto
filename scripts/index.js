import { initialCards } from '../scripts/kard.js';
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';
import PopupWithForm from '../scripts/PopupWithForm.js';


const popup = document.querySelector('.popup');
//const popupContacts = document.querySelector('.popup_contacts');
//const popupNewFoto = document.querySelector('.popup_newFoto');
//const popupZoom = document.querySelector('.popup_zoom');
const btnEdit = document.querySelector('.profile__btn-edit');
const btnPlus = document.querySelector('.profile__btn-plus');
const btnsClose = document.querySelectorAll('.popup__btn-close');
//const nameInput = popupContacts.querySelector('.form__item_type_name');
//const infoInput = popupContacts.querySelector('.form__item_type_contact');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
//const popupFotoZoom = popupZoom.querySelector('.popup__fotoZoom');
//const popupTitle = popupZoom.querySelector('.popup__titleZoom');
const element = document.querySelector('.element');
//const nameNewFoto = popupNewFoto.querySelector('.form__item_type_nameFoto');
//const linkNewFoto = popupNewFoto.querySelector('.form__item_type_newFoto');
const popups = document.querySelectorAll('.popup');
//const inputListContacts = Array.from(popupContacts.querySelectorAll('.form__item'));
//const btnSubmitContacts = popupContacts.querySelector('.form__btn-save');
//const inputListNewFoto = Array.from(popupNewFoto.querySelectorAll('.form__item'));
//const btnSubmitNewFoto = popupNewFoto.querySelector('.form__btn-save');
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

const userInfoConfig = {
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__subtitle'
}

/*function closePopup(item) {
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
*/
btnEdit.addEventListener('click', function () {
  formContactsValidator.resetErrorMessage();
  //nameInput.value = profileTitle.textContent;
  //infoInput.value = profileSubtitle.textContent;
  popupContacts.setInputValues(userInfo.getUserInfo());
  popupContacts.open();
});

/*function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;
  closePopup(popupContacts);
};*/

//formContacts.addEventListener('submit', handleFormSubmit);

btnPlus.addEventListener('click', function () {
  //formNewFoto.reset();
  formNewFotoValidator.resetErrorMessage();
  popupNewFoto.open();
});

const userInfo = new UserInfo(userInfoConfig);


const selectorPopupZoom = '.popup_zoom';

const popupZoom = new PopupWithImage(selectorPopupZoom);
popupZoom.setEventListeners();


const selectorTemplate = '#card-template';
const selectorContainer = '.element';
//const selectorPopup = '.popup';


/*function handleNewFotoSubmit (evt) {
  evt.preventDefault();
  container.prepend(createCard(nameNewFoto.value, linkNewFoto.value));
  closePopup(popupNewFoto);
};*/

//formNewFoto.addEventListener('submit', handleNewFotoSubmit);


function renderCard (title, link) {
  const card = new Card(title, link, selectorTemplate, popupZoom.open);
  const cardElement = card.generateCard();
  return cardElement;
};

const section = new Section({ items: initialCards, renderer: renderCard }, selectorContainer);
section.renderItems();


const selectorNewFoto = '.popup_newFoto';
const selectorPopupContact = '.popup_contacts';

const popupContacts = new PopupWithForm(selectorPopupContact, (evt) => {
  evt.preventDefault();
  //userInfo.setUserInfo(popupContacts.getInputValues());
  console.log("yy");
  userInfo.setUserInfo(popupContacts.getInputValues());
  popupContacts.close();
});
popupContacts.setEventListeners();
//console.log(popupContacts);

const popupNewFoto = new PopupWithForm(selectorNewFoto, (evt) => {
  evt.preventDefault();
  console.log('hi');
  section.addItem(section.renderItems(popupNewFoto.getInputValues()))
  popupNewFoto.close();
});
popupNewFoto.setEventListeners();


const formContactsValidator = new FormValidator(validationConfig, formContacts);
const formNewFotoValidator = new FormValidator(validationConfig, formNewFoto);
formContactsValidator.enableValidation();
formNewFotoValidator.enableValidation();





/*function closePopupOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.currentTarget);
};

popups.forEach(function(popup) {
  popup.addEventListener('mousedown', closePopupOverlay);
});*/
