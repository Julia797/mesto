const popup = document.querySelector('.popup');
const popupContacts = document.querySelector('.popup_contacts');
const popupNewFoto = document.querySelector('.popup_newFoto');
const popupZoom = document.querySelector('.popup_zoom');
const btnEdit = document.querySelector('.profile__btn-edit');
const btnPlus = document.querySelector('.profile__btn-plus');
const btnsClose = document.querySelectorAll('.popup__btn-close');
const formContacts = document.querySelector('.form_contacts');
const formNewFoto = document.querySelector('.form_newFoto');
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
  openPopup(popupContacts);
  resetErrorMessage(popupContacts);
  toggleButtonState(inputListContacts, btnSubmitContacts, validationConfig.inactiveButtonClass);
  nameInput.value = profileTitle.textContent;
  infoInput.value = profileSubtitle.textContent;
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
  openPopup(popupNewFoto);
  formNewFoto.reset();
  resetErrorMessage(popupNewFoto);
  toggleButtonState(inputListNewFoto, btnSubmitNewFoto, validationConfig.inactiveButtonClass);
});

/*const deleteCard = function(evt) {
  const listItem = evt.target.closest('.element__item');
  listItem.remove();
};

/*const plusLike = function(evt) {
  evt.target.classList.toggle('btn-like_active');
};*/

  const openZoomFoto = function(title, link) {
  popupFotoZoom.src = link;
  popupTitle.textContent = title;
  popupFotoZoom.alt = title;
  openPopup(popupZoom);
}
/*const zoomFoto = function(evt) {
  popupFotoZoom.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupFotoZoom.alt = evt.target.alt;
  openPopup(popupZoom);
}*/


/*function createCard(title, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.cloneNode(true);

  const elementFoto = cardItem.querySelector('.element__foto');
  const elementTitle = cardItem.querySelector('.element__title');

  elementTitle.textContent = title;
  elementFoto.src = link;
  elementFoto.alt = title;

  const btnDelete = cardItem.querySelector('.btn-delete');
  btnDelete.addEventListener('click', deleteCard);
  const btnLike = cardItem.querySelector('.btn-like');
  btnLike.addEventListener('click', plusLike);
  elementFoto.addEventListener('click', zoomFoto);  теперь openZoomFoto;
  return cardItem;
};*/
const selectorTemplate = '#card-template';

class Card {
  constructor(title, link, selectorTemplate, openZoomFoto) {
      this._title = title;
      this._link = link;
      this._selectorTemplate = selectorTemplate;
      this._openZoomFoto = openZoomFoto;
    }
_getTemplate() {
// забираем разметку из HTML и клонируем элемент
  const cardTemplate = document.querySelector(this._selectorTemplate).content;
  //const cardItem = cardTemplate.querySelector('.element__item').cloneNode(true);
  const cardItem = cardTemplate.querySelector('.element__item').cloneNode(true);
  // вернём DOM-элемент карточки
  return cardItem;
}

_handlePlusLike = () => {
  this._btnLike.classList.toggle('btn-like_active');
  console.log(this._btnLike);
};

_handleDeleteCard = () => {
  this._element.remove();
};

_handleOpenZoomFoto = () =>  {
  this._openZoomFoto(title, link);
}

_setEventListener() {
  this._btnLike.addEventListener('click', this._handlePlusLike);
  this._btnDelete.addEventListener('click', this._handleDeleteCard);
  this._elementFoto.addEventListener('click', this._handleOpenZoomFoto);
}

generateCard() {
  // Запишем разметку в приватное поле _element.
 // Так у других элементов появится доступ к ней.
  this._element = this._getTemplate();
  // Добавим данные
  this._element.querySelector('.element__foto').src = this._link;
  this._element.querySelector('.element__title').textContent = this._title;
  this._element.querySelector('.element__foto').alt = this._title;
  this._btnDelete = this._element.querySelector('.btn-delete');
  this._btnLike = this._element.querySelector('.btn-like');
  this._elementFoto = this._element.querySelector('.element__foto');
  this._setEventListener();

  // Вернём элемент наружу
  return this._element;
  }
}

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.name, item.link, selectorTemplate, openZoomFoto);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  // Добавляем в DOM
  document.querySelector('.element').append(cardElement);
});


/*initialCards.forEach(function(item) {
  element.append(createCard(item.name, item.link));
});*/

function handleNewFotoSubmit (evt) {
  evt.preventDefault();
  const card = new Card(nameNewFoto.value, linkNewFoto.value, selectorTemplate, openZoomFoto);
  const cardElement = card.generateCard();
  document.querySelector('.element').prepend(cardElement);
  //evt.target.reset();
  closePopup(popupNewFoto);
}


/*function handleNewFotoSubmit (evt) {
  evt.preventDefault();
  element.prepend(createCard(nameNewFoto.value, linkNewFoto.value));
  evt.target.reset();
  closePopup(popupNewFoto);
};*/

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
