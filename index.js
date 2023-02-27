/*let formElement = document.querySelector('.form');

      formElement.addEventListener('submit', function () {
          console.log('Форма отправлена');
      })
      ;*/

      let popup = document.querySelector('.popup');
      let btnEdit = document.querySelector('.btn-edit');
      let btnClose = document.querySelector('.btn-close');



      btnEdit.addEventListener('click', function () {
        popup.classList.add('popup_opened');
      });

      btnClose.addEventListener('click', function () {
        popup.classList.remove('popup_opened');
      });




