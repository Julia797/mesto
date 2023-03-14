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
const elementsFoto = document.querySelectorAll('.element__foto');


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


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const element = document.querySelector('.element');
//const elementFoto = document.querySelector('.element__foto');
//const elementTitle = document.querySelector('.element__title');

const deleteCard = function(evt) {
  const listItem = evt.target.closest('.element__item');
  listItem.remove();
};

const plusLike = function(evt) {
  evt.target.classList.toggle('btn-like_active');
};

const popupFotoZoom = document.querySelector('popup__fotoZoom');
const zoomFoto = function(evt) {

  //const elementTitle = document.querySelector('.element__title');

  popupFotoZoom.src = evt.target.link;
  //elementTitle.textContent = title;
  popupFotoZoom.alt = evt.target.title;
  openPopup(popupZoom);
}

function cardPlus(title, link) {
  const cardTemplate = document.querySelector('#card-template');
  const cardItem = cardTemplate.content.cloneNode(true);
  cardItem.querySelector('.element__title').textContent = title;
  cardItem.querySelector('.element__foto').src = link;
  cardItem.querySelector('.element__foto').alt = title;
  const btnDelete = cardItem.querySelector('.btn-delete');
  btnDelete.addEventListener('click', deleteCard);
  const btnLike = cardItem.querySelector('.btn-like');
  btnLike.addEventListener('click', plusLike);
  const elementFoto = cardItem.querySelector('.element__foto');
  elementFoto.addEventListener('click', zoomFoto);
  return cardItem;
};



initialCards.forEach(function(item) {
  title = item.name;
  link = item.link;
element.append(cardPlus(title, link));
});

const nameNewFoto = popupNewFoto.querySelector('.form__item_type_nameFoto');
const linkNewFoto = popupNewFoto.querySelector('.form__item_type_newFoto');

function NewFotoFormSubmit (evt) {
  evt.preventDefault();
  title = nameNewFoto.value;
  link = linkNewFoto.value;
  element.prepend(cardPlus(title, link));
  closePopup(popupNewFoto);
};
formNewFoto.addEventListener('submit', NewFotoFormSubmit);


/*elementsFoto.forEach(function(item) {
  item.addEventListener('click', function () {
  console.log('klik');
  openPopup(popup_zoom);
});
});*/



