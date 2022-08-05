import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  book: any;

  constructor() {}

  getProductToShow() {
    return this.book;
  }

  setProductToShow(book: any) {
    this.book = book;
  }
}
