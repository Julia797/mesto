let popup = document.querySelector('.popup');
let btnEdit = document.querySelector('.profile__btn-edit');
let btnClose = popup.querySelector('.popup__btn-close');
let form = document.querySelector('.form');
let nameInput = form.querySelector('.form__name');
let infoInput = form.querySelector('.form__info');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

btnEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  infoInput.value = profileSubtitle.textContent;

  form.addEventListener('submit', function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = infoInput.value;
    popup.classList.remove('popup_opened');
  });
});

btnClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});
