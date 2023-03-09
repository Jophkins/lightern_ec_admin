import { makeAutoObservable } from 'mobx';


export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Люстры' },
      { id: 2, name: 'Бра' },
      { id: 3, name: 'Торшеры' },
      { id: 4, name: 'Настольные лампы' },
    ];
    this._products = [
      {
        'id': 2,
        'article': 'bd-1222',
        'name': 'Rubcha',
        'price': 999,
        'img': 'http://localhost:5000/a37c38b0-bca4-46e3-8e8a-fa19a841c868.jpg',
        'createdAt': '2023-03-04T14:20:46.451Z',
        'updatedAt': '2023-03-04T14:20:46.451Z',
        'typeId': 1,
      },
      {
        'id': 3,
        'article': 'bd-22111',
        'name': 'Bubcha',
        'price': 1999,
        'img': 'http://localhost:5000/362d580b-6d9b-40e5-b53a-b146f02637c6.jpg',
        'createdAt': '2023-03-04T14:21:19.783Z',
        'updatedAt': '2023-03-04T14:21:19.783Z',
        'typeId': 2,
      },
      {
        'id': 4,
        'article': 'bd-2221',
        'name': 'Bebra',
        'price': 2999,
        'img': 'http://localhost:5000/3a32af62-548d-4117-8a44-e35e0d097358.jpg',
        'createdAt': '2023-03-04T14:21:49.769Z',
        'updatedAt': '2023-03-04T14:21:49.769Z',
        'typeId': 3,
      },
      {
        'id': 5,
        'article': 'bd-3331',
        'name': 'Membra',
        'price': 3999,
        'img': 'http://localhost:5000/a74eb4d2-25a1-484a-8cda-9d5add4a472a.jpg',
        'createdAt': '2023-03-04T14:22:23.074Z',
        'updatedAt': '2023-03-04T14:22:23.074Z',
        'typeId': 2,
      },
      {
        'id': 6,
        'article': 'bd-4442',
        'name': 'Getcha',
        'price': 4999,
        'img': 'http://localhost:5000/b6406285-17c3-4661-8822-f723e6b3fd92.jpg',
        'createdAt': '2023-03-04T14:29:16.401Z',
        'updatedAt': '2023-03-04T14:29:16.401Z',
        'typeId': 4,
      },
    ];
    this._selectedType = {};
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


  // getters
  get types() {
    return this._types;
  }

  get products() {
    return this._products;
  }

  get selectedType() {
    return this._selectedType;
  }


}
