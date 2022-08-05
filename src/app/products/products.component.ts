import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  minValue: number;
  maxValue: number;
  minmRating: number;

  constructor() {}

  ngOnInit(): void {}

  searchText: string;

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  getMinValue(min: number) {
    this.minValue = min;
  }

  getMaxValue(max: number) {
    this.maxValue = max;
  }

  getRatingValue(rating: number) {
    this.minmRating = rating;
  }
}
