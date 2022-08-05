import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output() getMinValue: EventEmitter<number> = new EventEmitter();
  @Output() getMaxValue: EventEmitter<number> = new EventEmitter();
  @Output() getRatingValue: EventEmitter<number> = new EventEmitter<number>();
  // @Output() getRatingValue: EventEmitter<number> = new EventEmitter();

  _ratingList: rating[];
  minmRating: number;

  constructor() {}

  ngOnInit(): void {
    this.getRatings();
  }

  minValue: number = 5;
  maxValue: number = 15;
  options: Options = {
    floor: 0,
    ceil: 20,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          this.getMinValue.emit(this.minValue);

          return '<b>Min:</b> $' + value;
        case LabelType.High:
          this.getMaxValue.emit(this.maxValue);

          return '<b>Max:</b> $' + value;
        default:
          return '$' + value;
      }
    },
  };

  getRatings() {
    this._ratingList = [
      { id: 4, name: '4★ & Above', isSelected: false },
      { id: 3, name: '3★ & Above', isSelected: false },
      { id: 2, name: '2★ & Above', isSelected: false },
      { id: 1, name: '1★ & Above', isSelected: false },
    ];
  }

  onChange() {
    this.minmRating = 4;
    let flag = false;
    this._ratingList.forEach((element) => {
      if (element.isSelected === true) {
        this.minmRating = Math.min(element.id, this.minmRating);
        flag = true;
      }
    });
    if (flag === false) {
      this.minmRating = 1;
    }
    this.getRatingValue.emit(this.minmRating);
  }
}

class rating {
  id: number;
  name: string;
  isSelected: boolean;
}
