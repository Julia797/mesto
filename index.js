let popup = document.querySelector('.popup');
let btnEdit = document.querySelector('.profile__btn-edit');
let btnClose = document.querySelector('.popup__btn-close');

btnEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

btnClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let infoInput = document.querySelector('.popup__info');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let btnSave = document.querySelector('.popup__btn-save');

btnSave.addEventListener('click', function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;
  popup.classList.remove('popup_opened');
});

form.addEventListener('submit', handleFormSubmit);

