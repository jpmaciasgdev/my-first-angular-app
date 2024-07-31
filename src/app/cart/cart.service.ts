import { Injectable } from '@angular/core';
import { get } from 'node:http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private items: any  = [];
  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
  }
  getItems() {
    console.log("traje items")
    return this.items;
  }
  deleteItem(){

  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
