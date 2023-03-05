let popup = document.querySelector('.popup');
let btnEdit = document.querySelector('.profile__btn-edit');
let btnClose = popup.querySelector('.popup__btn-close');
let form = document.querySelector('.form');
let nameInput = form.querySelector('.form__item_type_name');
let infoInput = form.querySelector('.form__item_type_contact');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function closePopap() {
  popup.classList.remove('popup_opened')
}

btnEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  infoInput.value = profileSubtitle.textContent;
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;
  closePopap();
}

form.addEventListener('submit', handleFormSubmit);


btnClose.addEventListener('click', function () {
  closePopap();
});


