export default class Card {
  constructor(data, selectorTemplate, openZoomFoto, openPopupConfirmDeletion, userId) {
    this.data = data;
    this._title = data.name;
    this._link = data.link;
    //this._btnDelete = this._element.querySelector('.btn-delete');
    this._ownerCardIdOwnerCard = data.owner._id;
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

_handlePlusLike = () => {
  this._btnLike.classList.toggle('btn-like_active');
};

_handleDeleteCard = () => {
  //this._t.remove();
  //this._element = null;
  this._openPopupConfirmDeletion(this);
};

//getId() {
//  console.log(this.data);
 // return this.data._id
//};

removeElement() {
  this._element.remove();
  this._element = null;
};

/*_handleOpenPopupConfirmDeletion = () => {
  popupConfirmDeletion.open();
};*/

_removeBtnDelete() {
  if (this._userId != this._ownerCardIdOwnerCard) {
    this._btnDelete.remove()
   // console.log('чужая');
  }
}

_handleOpenZoomFoto = () =>  {
  this._openZoomFoto(this._title, this._link);
};

_setEventListener() {
  this._btnLike.addEventListener('click', this._handlePlusLike);
  this._btnDelete.addEventListener('click', this._handleDeleteCard);
  //this._btnDelete.addEventListener('click', this._deleteIconClick);
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
  this._elementFoto = this._element.querySelector('.element__foto');
  //this.id = this.data._id;
  this._setEventListener();
  // Вернём элемент наружу
  return this._element;
  };
};


