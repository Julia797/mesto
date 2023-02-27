/*let formElement = document.querySelector('.form');

      formElement.addEventListener('submit', function () {
          console.log('Форма отправлена');
      })
      ;*/

      let popup = document.querySelector('.popup');
      let btnEdit = document.querySelector('.btn-edit');
      let btnClose = document.querySelector('.btn-close');
      let popupContainer = document.querySelector('.popup__container');


      btnEdit.addEventListener('click', function () {
        popup.classList.add('popup_opened');
      });

      btnClose.addEventListener('click', function () {
        popup.classList.remove('popup_opened');
      });

      popup.addEventListener('click', function () {
        popup.classList.remove('popup_opened');
      });

      popupContainer.addEventListener('click', function (e) {
        e.stopPropagation();
      });


