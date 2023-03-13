const popup = document.querySelector('.popup');
const popupContacts = document.querySelector('.popup_contacts');
const popupNewFoto = document.querySelector('.popup_newFoto');
const popupPreview = document.querySelector('.popup_preview');
const btnEdit = document.querySelector('.profile__btn-edit');
const btnPlus = document.querySelector('.profile__btn-plus');
const btnsClose = document.querySelectorAll('.popup__btn-close');
/*const btnDelete = document.querySelector('.btn-delete');*/
const formContacts = document.querySelector('.form_contacts');
const formNewFoto = document.querySelector('.form_newFoto');
const nameInput = popupContacts.querySelector('.form__item_type_name');
const infoInput = popupContacts.querySelector('.form__item_type_contact');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elementsFoto = document.querySelectorAll('.element__foto');

/*console.log(elementsFoto);*/

/*const btnsOpen = document.querySelectorAll('.btnOpen');
btnsOpen.forEach(function(item) {
  console.log(ghbdtn)
  item.addEventListener('click', function (){
/*this.
console.log(ghbdtn)
});
});
console.log(btnsOpen);
btnsOpen.forEach(function(item) {
  item.addEventListener('click', function () {
    console.log(item)
    item
  })
 });*/


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
})


/*btnClose.addEventListener('click', function () {
  console.log(btnClose)
  closePopup(popup);
});


/*const btnClose = btnsClose.forEach(function(item) {
  console.log(item.btnsClose)
 btnClose.addEventListener('click', function () {

  console.log(item.btnClose)

});
})

/*function openPopup(popupElement) {
  // ...
}

const btnClose = btnsClose.forEach(function() {
 btnClose.addEventListener('click', function () {

  console.log(item.btnClose)


// эту функцию можно переиспользовать для разных попапов

editPopupButton.addEventListener('click', function () {
  openPopup(editPopup); // открываем попап редактирования
});

newItemPopupButton.addEventListener('click', function () {
  openPopup(newItemPopup); // открываем попап добавления
}); */

btnPlus.addEventListener('click', function () {
  /*const nameFoto = document.querySelector('.form__item_type_nameFoto');
  /*console.log(nameFoto);*/
  /*const popupFoto = nameFoto.closest('.popup');*/
  openPopup(popupNewFoto);
});

elementsFoto.forEach(function(item) {
  item.addEventListener('click', function () {
  /*console.log(elementsFoto);*/
  /*const popupElFoto = elementsFoto.closest('.popup');*/
  openPopup(popupPreview);
});
})

/*btnsClose.forEach(function(item) {
  item.addEventListener('click', function () {
    const itemPopap = item.closest('.popup');
    console.log(item)
    console.log(itemPopap)
  closePopup(itemPopap);
});
})*/

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
  const elementFoto = document.querySelector('.element__foto');
  const elementTitle = document.querySelector('.element__title');

  function cardPlus(title, link) {
    const cardTemplate = document.querySelector('#card-template');
    const cardItem = cardTemplate.content.cloneNode(true);
    cardItem.querySelector('.element__title').textContent = title;
    cardItem.querySelector('.element__foto').src = link;
    cardItem.querySelector('.element__foto').alt = title;
    const btnDelete = cardItem.querySelector('.btn-delete');
    return cardItem;
  };


initialCards.forEach(function(item) {
  title = item.name;
  link = item.link;
element.append(cardPlus(title, link));
})


/*initialCards.forEach(function(item) {
const cardItem = cardTemplate.content.cloneNode(true);
cardItem.querySelector('.element__title').textContent = item.name;
cardItem.querySelector('.element__foto').src = item.link;
cardItem.querySelector('.element__foto').alt = item.name;
element.append(cardItem);
})*/

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


/*
  function addCard(name, link) {
    const cardItem = cardTemplate.content.cloneNode(true);
    cardItem.querySelector('.element__title').textContent = nameNewFoto.value;
    cardItem.querySelector('.element__foto').src = linkNewFoto.value;
    console.log(cardItem);
    element.prepend(cardItem);
  }*/

  /*addCard(jhkjke, link);*/



/*console.log(initialCards);

/*initialCards.forEach (function(item) {
elementTitle = item.initialCards.name;
elementFoto = item.initialCards.link;
})
console.log(initialCards.name);
console.log(initialCards.link);*/

// выберем кнопку удаления
const btnsDelete = document.querySelectorAll('.btn-delete');


// добавим обработчик
/*btnsDelete.forEach (function(btnDelete1) {
btnDelete1.addEventListener('click', function () {
  console.log(btnsDelete);
  const listItem = btnDelete1.closest('.element__item');
  listItem.remove();
});
});*/
/*const btnDelete = cardItem.querySelector('.btn-delete');
/*btnDelete.addEventListener('click', deleteCard ());*/
function deleteCard () {
  const listItem = btnDelete.closest('.element__item');
  listItem.remove();
}
btnDelete.addEventListener('click', deleteCard ())
