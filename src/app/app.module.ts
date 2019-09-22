import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserCheckComponent } from './components/user-check/user-check.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductCatalogueComponent } from './components/product-catalogue/product-catalogue.component';

const appRoutes: Routes = [
  {path: '', component: PlaceOrderComponent},
  {path: 'place-order', component: PlaceOrderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserCheckComponent,
    PlaceOrderComponent,
    ProductCatalogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
