export default class Section {
  constructor({ renderer }, selector) {
    //this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
    };

  renderItems(items) {
    items.forEach(item => {
      //this.addItem(item);
      this.addItem(this._renderer(item));
      //console.log(this._renderer(item.title, item.link));
    });
  };

  addItem(element) {
    //this._container.prepend(this._renderer(item.title, item.link));
    this._container.prepend(element);
  };
};
