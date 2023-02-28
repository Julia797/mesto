      let popup = document.querySelector('.popup');
      let btnEdit = document.querySelector('.btn-edit');
      let btnClose = document.querySelector('.btn-close');



      btnEdit.addEventListener('click', function () {
        popup.classList.add('popup_opened');
      });

      btnClose.addEventListener('click', function () {
        popup.classList.remove('popup_opened');
      });

      let popupInput = document.querySelector('.popup__input');
      let nameInput = document.querySelector('.popup__name');
      let infoInput = document.querySelector('.popup__info');
      let profileTitle = document.querySelector('.profile__title');
      let profileSubtitle = document.querySelector('.profile__subtitle');
      let btnSave = document.querySelector('.btn-save');

      btnSave.addEventListener('click', function handleFormSubmit (evt) {
        evt.preventDefault();
        profileTitle.textContent = nameInput.value;
        profileSubtitle.textContent = infoInput.value;
        popup.classList.remove('popup_opened');
      });







/*console.log(nameInput.value);*/




