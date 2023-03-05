const popup = document.querySelector('.popup');
const btnEdit = document.querySelector('.profile__btn-edit');
const btnClose = popup.querySelector('.popup__btn-close');
const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__item_type_name');
const infoInput = form.querySelector('.form__item_type_contact');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

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


