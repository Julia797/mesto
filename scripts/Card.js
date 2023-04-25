export default class Card {
  constructor(title, link, selectorTemplate, openZoomFoto) {
      this._title = title;
      this._link = link;
      this._selectorTemplate = selectorTemplate;
      this._openZoomFoto = openZoomFoto;
    }
_getTemplate() {
// забираем разметку из HTML и клонируем элемент
  const cardTemplate = document.querySelector(this._selectorTemplate).content;
  const cardItem = cardTemplate.querySelector('.element__item').cloneNode(true);
  // вернём DOM-элемент карточки
  return cardItem;
}

_handlePlusLike = () => {
  this._btnLike.classList.toggle('btn-like_active');
};

_handleDeleteCard = () => {
  this._element.remove();
};

_handleOpenZoomFoto = () =>  {
  this._openZoomFoto(this._title, this._link);
}

_setEventListener() {
  this._btnLike.addEventListener('click', this._handlePlusLike);
  this._btnDelete.addEventListener('click', this._handleDeleteCard);
  this._elementFoto.addEventListener('click', this._handleOpenZoomFoto);
}

generateCard() {
  this._element = this._getTemplate();
  this._element.querySelector('.element__foto').src = this._link;
  this._element.querySelector('.element__title').textContent = this._title;
  this._element.querySelector('.element__foto').alt = this._title;
  this._btnDelete = this._element.querySelector('.btn-delete');
  this._btnLike = this._element.querySelector('.btn-like');
  this._elementFoto = this._element.querySelector('.element__foto');
  this._setEventListener();
  // Вернём элемент наружу
  return this._element;
  }
};


