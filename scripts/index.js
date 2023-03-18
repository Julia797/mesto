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


function closePopup(item) {
  item.classList.remove('popup_opened')
};

function openPopup(item) {
  item.classList.add('popup_opened')
};

btnEdit.addEventListener('click', function () {
  openPopup(popupContacts);
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
  const itemPopap = item.closest('.popup');
  closePopup(itemPopap);
});
});

btnPlus.addEventListener('click', function () {
  openPopup(popupNewFoto);
});

const element = document.querySelector('.element');

const deleteCard = function(evt) {
  const listItem = evt.target.closest('.element__item');
  listItem.remove();
};

const plusLike = function(evt) {
  evt.target.classList.toggle('btn-like_active');
};

const popupFotoZoom = popupZoom.querySelector('.popup__fotoZoom');
const popupTitle = popupZoom.querySelector('.popup__titleZoom');

const zoomFoto = function(evt) {
  popupFotoZoom.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupFotoZoom.alt = evt.target.alt;
  openPopup(popupZoom);
}

function cardPlus(title, link) {
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
  elementFoto.addEventListener('click', zoomFoto);
  return cardItem;
};

initialCards.forEach(function(item) {
  element.append(cardPlus(item.name, item.link));
});

const nameNewFoto = popupNewFoto.querySelector('.form__item_type_nameFoto');
const linkNewFoto = popupNewFoto.querySelector('.form__item_type_newFoto');

function NewFotoFormSubmit (evt) {
  evt.preventDefault();
  element.prepend(cardPlus(nameNewFoto.value, linkNewFoto.value));
  nameNewFoto.value = nameNewFoto.textContent;
  linkNewFoto.value = linkNewFoto.textContent;
   closePopup(popupNewFoto);
};

formNewFoto.addEventListener('submit', NewFotoFormSubmit);

