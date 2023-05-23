export default class Api {
  constructor() {

  }
  //getInitialCards() {
    // ...
  //}
  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-66/users/me', {
      headers: {
        authorization: '4cea4e30-242f-4d37-9183-1699f4441225'
      }
    })
    .then(res => {
      //console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

  setUserInfo(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
    method: 'PATCH',
    headers: {
     authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.username,
      about: data.userjob,
    })
  })
  .then(res => {
        //console.log(res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
    })
  };


  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
      headers: {
        authorization: '4cea4e30-242f-4d37-9183-1699f4441225'
      }
    })
      .then(res => {
        //console.log(res);
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };

  createCard (data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
      method: 'POST',
      headers: {
        authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      }),
    })
      .then(res => {
        //console.log(res);
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };

  setUpdateAvatar(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar', {
      method: 'PATCH',
      headers: {
       authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.linkupdateAvatar,
      })
    })
    .then(res => {
        //console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };



  //DELETE https://mesto.nomoreparties.co/v1/cohort-66/cards/cardId

  deleteCard (cardId) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards/' + cardId, {
      method: 'DELETE',
      headers: {
      authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
      },
    })
      .then(res => {

      });
  }






};

/*fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
    headers: {
      authorization: '4cea4e30-242f-4d37-9183-1699f4441225'
    }
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(res => {
      console.log(res);
    });*/


/*const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
    'Content-Type': 'application/json'
  }
});*/

/*api.getInitialCards()
  .then((result) => {
    // обрабатываем результат
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  }); */


  /*deleteCard (data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
     method: 'POST',
     headers: {
      authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      }),
  })
      .then(res => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
};*/
