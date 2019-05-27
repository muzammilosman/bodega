import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserCheckComponent } from './components/user-check/user-check.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

const appRoutes: Routes = [
  {path: '', component: UserCheckComponent},
  {path: 'place-order', component: PlaceOrderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserCheckComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
