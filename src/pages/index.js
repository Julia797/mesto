import './index.css'; //  импорт главного файла стилей
import { initialCards } from '../components/kard.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirmDeletion from '../components/PopupConfirmDeletion.js';
import Api from '../components/Api.js';
import { data } from 'autoprefixer';

const btnEdit = document.querySelector('.profile__btn-edit');
const btnPlus = document.querySelector('.profile__btn-plus');
const formContacts = document.querySelector('.form_contacts');
const formNewFoto = document.querySelector('.form_newFoto');
const formUpdateAvatar = document.querySelector('.form_updateAvatar');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
    'Content-Type': 'application/json'
  }
});

/*api.getInitialCards()
  .then((res) => {
    //console.log(res);
    section.renderItems(res);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

  api.getUserInfo()
  .then((res) => {
    console.log(res);

  })*/


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
  userJobSelector: '.profile__subtitle',
  userAvatar: '.profile__avatar'
};

btnEdit.addEventListener('click', function () {
  formContactsValidator.resetErrorMessage();
  popupContacts.setInputValues(userInfo.getUserInfo());
  popupContacts.open();
});

btnPlus.addEventListener('click', function () {
  formNewFotoValidator.resetErrorMessage();
  popupNewFoto.open();
});

const userInfo = new UserInfo(userInfoConfig);

const selectorPopupZoom = '.popup_zoom';

const popupZoom = new PopupWithImage(selectorPopupZoom);
popupZoom.setEventListeners();

const selectorTemplate = '#card-template';
const selectorContainer = '.element';

/*getInitialCards()
.then(res => {
  console.log(res);
})*/

const selectorConfirmDeletion = '.popup_confirmDeletion';

const popupConfirmDeletion = new PopupConfirmDeletion(selectorConfirmDeletion, (data) => {
  console.log(data.id);
  api.deleteCard(data.id);

    //element.removeElement();
    popupConfirmDeletion.close();
  });

popupConfirmDeletion.setEventListeners();

function renderCard (data) {
  const card = new Card(data, selectorTemplate, popupZoom.open, popupConfirmDeletion.open);
  const cardElement = card.generateCard();
  return cardElement;
};

/*function renderCard (title, link) {
  const card = new Card(title, link, selectorTemplate, popupZoom.open, popupConfirmDeletion.open);
  const cardElement = card.generateCard();
  return cardElement;
};*/

const section = new Section({ renderer: renderCard }, selectorContainer);
//const section = new Section({ items: initialCards, renderer: renderCard }, selectorContainer);
//section.renderItems();


const selectorNewFoto = '.popup_newFoto';
const selectorPopupContact = '.popup_contacts';

const popupContacts = new PopupWithForm(selectorPopupContact, (data) => {
  api.setUserInfo(data);
  //userInfo.setUserInfo(data);
});
popupContacts.setEventListeners();


//const popupNewFoto = new PopupWithForm(selectorNewFoto, (data) => {
const popupNewFoto = new PopupWithForm(selectorNewFoto, (data) => {
 console.log(data);
  api.createCard(data)
  .then(res => {
    section.addItem(renderCard (res));
  })
});
popupNewFoto.setEventListeners();


const selectorUpdateAvatar = '.popup_updateAvatar';

const popupUpdateAvatar = new PopupWithForm(selectorUpdateAvatar, (data) => {
  document.querySelector('.profile__avatar').src = data.linkupdateAvatar;
  popupUpdateAvatar.close;
});

popupUpdateAvatar.setEventListeners();


const profileAvatar = document.querySelector('.profile__avatar-edit');


profileAvatar.addEventListener('click', () => {
formUpdateValidator.resetErrorMessage();
popupUpdateAvatar.open();
});

/*api.getInitialCards()
  .then((res) => {
    //console.log(res);
    section.renderItems(res);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

  api.getUserInfo()
  .then((res) => {
    console.log(res);*/

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([dataUserInfo, dataInitialCards]) => {
     console.log(dataInitialCards);
  userInfo.setUserInfo(dataUserInfo);
  section.renderItems(dataInitialCards.reverse());
    })



const formContactsValidator = new FormValidator(validationConfig, formContacts);
const formNewFotoValidator = new FormValidator(validationConfig, formNewFoto);
formContactsValidator.enableValidation();
formNewFotoValidator.enableValidation();
const formUpdateValidator = new FormValidator(validationConfig, formUpdateAvatar);
formUpdateValidator.enableValidation();
