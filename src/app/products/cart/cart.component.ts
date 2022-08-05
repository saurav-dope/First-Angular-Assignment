import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice().toFixed(2);
    });
  }

  removeItem(book: any) {
    book.quantity = 1;
    delete book.total;
    this.products = this.products.filter(
      (cli: any) => cli.bookId !== book.bookId
    );
    this.cartService.removeCartItem(book);
  }

  emptyCart() {
    this.products.forEach((a: any) => {
      delete a.quantity;
      delete a.total;
    });
    this.cartService.removeAllCart();
  }
}
