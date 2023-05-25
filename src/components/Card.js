export default class Card {
  constructor(data, selectorTemplate, openZoomFoto, openPopupConfirmDeletion, userId, switchLike) {
    this.data = data;
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._switchLike = switchLike;
    this._lengthLikes = data.likes.length;
    this._cardId = data._id;
    this._ownerCardId = data.owner._id;
    this._userId = userId;
    this._selectorTemplate = selectorTemplate;
    this._openZoomFoto = openZoomFoto;
    this._openPopupConfirmDeletion = openPopupConfirmDeletion;
  };

_getTemplate() {
// забираем разметку из HTML и клонируем элемент
  const cardTemplate = document.querySelector(this._selectorTemplate).content;
  const cardItem = cardTemplate.querySelector('.element__item').cloneNode(true);
  // вернём DOM-элемент карточки
  return cardItem;
};

_checkLike() {
  this._likes.forEach(ownerLike => {
   if (ownerLike._id === this._userId) {
     this._btnLike.classList.add('btn-like_active');
    return
   }
  });
  this._likesCounter.textContent = this._lengthLikes;
};

_handlePlusLike = () => {
  this._switchLike(this._btnLike, this._cardId);
};

toggleBtnLike(dataLikes) {
  this._btnLike.classList.toggle('btn-like_active');
  this._likesCounter.textContent = dataLikes.length;
};

_handleDeleteCard = () => {
  this._openPopupConfirmDeletion(this);
};

removeElement() {
  this._element.remove();
  this._element = null;
};

_removeBtnDelete() {
  if (this._userId != this._ownerCardId) {
    this._btnDelete.remove()
  }
};

_handleOpenZoomFoto = () =>  {
  this._openZoomFoto(this._title, this._link);
};

_setEventListener() {
  this._btnLike.addEventListener('click', this._handlePlusLike);
  this._btnDelete.addEventListener('click', this._handleDeleteCard);
  this._elementFoto.addEventListener('click', this._handleOpenZoomFoto);
};

generateCard() {
  this._element = this._getTemplate();
  this._element.querySelector('.element__foto').src = this._link;
  this._element.querySelector('.element__title').textContent = this._title;
  this._element.querySelector('.element__foto').alt = this._title;
  this._btnDelete = this._element.querySelector('.btn-delete');
  this._removeBtnDelete();
  this._btnLike = this._element.querySelector('.btn-like');
  this._likesCounter = this._element.querySelector('.element__likes-counter');
  this._elementFoto = this._element.querySelector('.element__foto');
  this._setEventListener();
  this._checkLike();
  // Вернём элемент наружу
  return this._element;
  };
};
