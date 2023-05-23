export default class Api {
  constructor() {

  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-66/users/me', {
      headers: {
        authorization: '4cea4e30-242f-4d37-9183-1699f4441225'
      }
    })
    .then(res => {
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
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };


  deleteCard (cardId) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards/' + cardId, {
      method: 'DELETE',
      headers: {
      authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
      },
    })
    .then(res => {

    });
  };

  plusLike (cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
      authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };

  minusLike (cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
      authorization: '4cea4e30-242f-4d37-9183-1699f4441225',
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };



};

