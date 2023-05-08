export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
    };

  renderItems() {
    this._items.forEach((item) => {
      this.addItem(item);
    });
  };

  addItem(item) {
    this._container.prepend(this._renderer(item.title, item.link));
  };
};
