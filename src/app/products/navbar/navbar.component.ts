import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string | null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('token');
  }

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue.toLowerCase());
  }

  onCartClick() {
    let username = localStorage.getItem('token');

    if (username) {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
