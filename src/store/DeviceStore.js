import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Smartphones",
      },
      {
        id: 2,
        name: "Tvs",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "Apple",
      },
      {
        id: 2,
        name: "Samsung",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "iPhone 14",
        price: 30000,
        rating: 0,
        img: "https://myapplestyle.com.ua/wa-data/public/shop/products/70/63/6370/images/9286/9286.970.png",
      },
      {
        id: 2,
        name: "iPhone 14 Plus",
        price: 35000,
        rating: 0,
        img: "https://myapplestyle.com.ua/wa-data/public/shop/products/70/63/6370/images/9286/9286.970.png",
      },
      {
        id: 3,
        name: "iPhone 14 Pro",
        price: 40000,
        rating: 0,
        img: "https://myapplestyle.com.ua/wa-data/public/shop/products/70/63/6370/images/9286/9286.970.png",
      },
      {
        id: 4,
        name: "iPhone 14 Pro Max",
        price: 50000,
        rating: 0,
        img: "https://myapplestyle.com.ua/wa-data/public/shop/products/70/63/6370/images/9286/9286.970.png",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
