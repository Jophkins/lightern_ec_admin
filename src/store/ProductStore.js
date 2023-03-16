import { makeAutoObservable } from 'mobx';


export default class ProductStore {
  constructor() {
    this._types = [];
    this._products = [];
    this._selectedType = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }


// setters
  setTypes(types) {
    this._types = types;
  }

  setProducts(products) {
    this._products = products;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }


  // getters
  get types() {
    return this._types;
  }

  get products() {
    return this._products;
  }

  get selectedType() {
    // this.setPage(1);
    return this._selectedType;
  }

  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }


}
