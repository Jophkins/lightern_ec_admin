import { makeAutoObservable } from 'mobx';


export default class ProductStore {
  constructor() {
    this._types = [];
    this._products = [];
    this._productsLoaded = false;
    this._selectedType = {};
    this._selectedArticle = '';
    this._typesLoaded = false;
    this._page = 1;
    this._totalCount = 0;
    this._limit = 20;
    makeAutoObservable(this);
  }


// setters
  setTypes(types) {
    this._types = types;
  }

  setProducts(products) {
    this._products = products;
  }

  setProductsLoaded(bool) {
    this._productsLoaded = bool;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedArticle(article) {
    this._selectedArticle = article;
  }

  setTypesLoaded(bool) {
    this._typesLoaded = bool;
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

  get productsLoaded() {
    return this._productsLoaded;
  }

  get selectedType() {
    // this.setPage(1);
    return this._selectedType;
  }

  get selectedArticle() {
    return this._selectedArticle;
  }

  get typesLoaded() {
    return this._typesLoaded;
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
