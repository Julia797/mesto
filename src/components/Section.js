/*export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
    };

  renderItems() {
    this._items.forEach(item => {
      //this.addItem(item);
      this.addItem(this._renderer(item.title, item.link));
      //console.log(this._renderer(item.title, item.link));
    });
  };

  addItem(element) {
    //this._container.prepend(this._renderer(item.title, item.link));
    this._container.prepend(element);

  };
};*/

export default class Section {
  constructor({ renderer }, selector) {
    //this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
    };

  renderItems(items) {
    items.forEach(item => {
      //this.addItem(item);
      this.addItem(this._renderer(item.name, item.link));
      //console.log(this._renderer(item.title, item.link));
    });
  };

  addItem(element) {
    //this._container.prepend(this._renderer(item.title, item.link));
    this._container.prepend(element);

  };
};

