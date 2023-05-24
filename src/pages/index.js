import './index.css'; //  импорт главного файла стилей
//import { initialCards } from '../components/kard.js';
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

const selectorConfirmDeletion = '.popup_confirmDeletion';

const popupConfirmDeletion = new PopupConfirmDeletion(selectorConfirmDeletion, (element) => {
  api.deleteCard(element.data._id)
  .then(() => {
    element.removeElement();
    popupConfirmDeletion.close();
  })
  .catch((err) => {
    console.log('Ошибка. Удаление карточки не выполнено: ', err);
  })
  .finally(() => popupConfirmDeletion.btnSubmit.textContent = 'Да')

});

popupConfirmDeletion.setEventListeners();

function renderCard (data) {
  const card = new Card(data, selectorTemplate, popupZoom.open, popupConfirmDeletion.open, userId, (btnLike, cardId) => {
    if (btnLike.classList.contains('btn-like_active')) {
      api.minusLike(cardId)
      .then(res => {
        card.toggleBtnLike(res.likes);
      })
      .catch((err) => {
        console.log('Ошибка. Удаление лайка не выполнено: ', err);
      });
    }
    else {
      api.plusLike(cardId)
      .then(res => {
        card.toggleBtnLike(res.likes);
      })
      .catch((err) => {
        console.log('Ошибка. Добавление лайка не выполнено: ', err);
      });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};

const section = new Section({ renderer: renderCard }, selectorContainer);

const selectorNewFoto = '.popup_newFoto';
const selectorPopupContact = '.popup_contacts';

const popupContacts = new PopupWithForm(selectorPopupContact, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo(res);
      popupContacts.close();
    })
    .catch((err) => {
      console.log('Ошибка. Редактирование профиля не выполнено: ', err);
    })
    .finally(() => popupContacts.btnSubmit.textContent = 'Сохранить')
    });
popupContacts.setEventListeners();


//const popupNewFoto = new PopupWithForm(selectorNewFoto, (data) => {
const popupNewFoto = new PopupWithForm(selectorNewFoto, (data) => {
 //console.log(data);
  api.createCard(data)
  .then(res => {
    section.addItem(renderCard (res));
    popupNewFoto.close();
  })
  .catch((err) => {
    console.log('Ошибка. Создание новой карточки не выполнено: ', err);
  })
  .finally(() => popupContacts.btnSubmit.textContent = 'Создать')
});
popupNewFoto.setEventListeners();


const selectorUpdateAvatar = '.popup_updateAvatar';
const popupUpdateAvatar = new PopupWithForm(selectorUpdateAvatar, (data) => {
  //document.querySelector('.profile__avatar').src = data.linkupdateAvatar;
  api.setUpdateAvatar(data)
  .then(res => {
    userInfo.setUserInfo(res);
    popupUpdateAvatar.close();
  })
  .catch((err) => {
    console.log('Ошибка. Аватар не обновлен: ', err);
  })
  .finally(() => popupUpdateAvatar.btnSubmit.textContent = 'Сохранить')
});

popupUpdateAvatar.setEventListeners();


const profileAvatar = document.querySelector('.profile__avatar-edit');
profileAvatar.addEventListener('click', () => {
formUpdateValidator.resetErrorMessage();
popupUpdateAvatar.open();
});


let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([dataUserInfo, dataInitialCards]) => {
    userId = dataUserInfo._id;
    userInfo.setUserInfo(dataUserInfo);
    section.renderItems(dataInitialCards.reverse());
  })
  .catch((err) => {
    console.log('Ошибка. Начальные данные не созданы: ', err);
  });

const formContactsValidator = new FormValidator(validationConfig, formContacts);
const formNewFotoValidator = new FormValidator(validationConfig, formNewFoto);
formContactsValidator.enableValidation();
formNewFotoValidator.enableValidation();
const formUpdateValidator = new FormValidator(validationConfig, formUpdateAvatar);
formUpdateValidator.enableValidation();
