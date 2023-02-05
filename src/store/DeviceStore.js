import { makeAutoObservable } from "mobx";
import device from "../assets/device.png"; // ! Delete

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
      {
        id: 3,
        name: "Laptops",
      },
      {
        id: 4,
        name: "Fridges",
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
      {
        id: 3,
        name: "Xiaomi",
      },
      {
        id: 4,
        name: "Lenovo",
      },
      {
        id: 5,
        name: "Nokia",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "iPhone 14",
        price: 30000,
        rating: 5,
        img: device,
      },
      {
        id: 2,
        name: "iPhone 14 Plus",
        price: 35000,
        rating: 4,
        img: device,
      },
      {
        id: 3,
        name: "iPhone 14 Pro",
        price: 40000,
        rating: 2,
        img: device,
      },
      {
        id: 4,
        name: "iPhone 14 Pro Max",
        price: 50000,
        rating: 5,
        img: device,
      },
      {
        id: 5,
        name: "iPhone 14 Pro Max",
        price: 50000,
        rating: 5,
        img: device,
      },
      {
        id: 7,
        name: "iPhone 14 Pro Max",
        price: 50000,
        rating: 5,
        img: device,
      },
      {
        id: 8,
        name: "iPhone 14 Pro Max",
        price: 50000,
        rating: 5,
        img: device,
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

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

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
