import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    let isAvailable = false;
    //code to be done here
    if (this.cartItemList.length) {
      for (let index = 0; index < this.cartItemList.length; index++) {
        if (this.cartItemList[index].bookId === product.bookId) {
          this.cartItemList[index].quantity += 1;
          this.cartItemList[index].total =
            this.cartItemList[index].bookPrice *
            this.cartItemList[index].quantity;
          isAvailable = true;
        }
      }
    }
    if (!isAvailable) {
      this.cartItemList.quantity += 1;
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
    console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(book: any) {
    for (let index = 0; index < this.cartItemList.length; index++) {
      if (this.cartItemList[index].bookId === book.bookId) {
        this.cartItemList.splice(index, 1);
      }
    }
  }

  removeAllCart() {
    this.cartItemList = [];

    this.productList.next(this.cartItemList);
  }
}
