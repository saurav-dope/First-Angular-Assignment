import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/product';
import { ProductService } from 'src/app/shared/product.service';
import { CartService } from 'src/app/shared/cart.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  book: IBook | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    public dialogRef: MatDialogRef<ProductDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.book = this.productService.getProductToShow();
    console.log(this.book);
  }

  addToCart(book: any) {
    let username = localStorage.getItem('token');

    if (username) {
      this.cartService.addToCart(book);
    } else {
      this.router.navigate(['/login']);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
