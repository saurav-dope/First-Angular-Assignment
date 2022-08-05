import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { ProductService } from 'src/app/shared/product.service';

import { products } from '../../product';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  products = products;
  button: any;

  @Input() searchTextInput: string;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() minmRating: number;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.searchTextInput = '';
    this.minmRating = 1;

    this.products.forEach((a: any) => {
      Object.assign(a, { quantity: a.quantity || 1, total: a.bookPrice });
    });
  }

  addToCart(book: any) {
    let username = localStorage.getItem('token');

    if (username) {
      this.cartService.addToCart(book);
    } else {
      this.router.navigate(['/login']);
    }
  }

  setProductId(book: any) {
    this.productService.setProductToShow(book);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '800px';
    // dialogConfig.height = '500px';

    this.dialog.open(ProductDetailsComponent, dialogConfig);
  }
}
