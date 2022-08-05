import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';
import { FiltersComponent } from './products/filters/filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDisplayComponent } from './products/product-display/product-display.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartComponent } from './products/cart/cart.component';
import { NavbarComponent } from './products/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProductsComponent,
    ErrorComponent,
    FiltersComponent,
    ProductDisplayComponent,
    ProductDetailsComponent,
    CartComponent,
    NavbarComponent,
  ],
  imports: [
    MatDialogModule,
    Ng5SliderModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginPageComponent },
      { path: 'products', component: ProductsComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: '**', component: ErrorComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsComponent],
})
export class AppModule {}
