import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CouponsComponent } from './coupons/coupons.component';
import { FacturesComponent } from './factures/factures.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { FormsModule } from '@angular/forms';
import { AjoutCouponComponent } from './ajout-coupon/ajout-coupon.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    LoginComponent,
    ProfileComponent,
    IndexComponent,
    UsersComponent,
    ProductsComponent,
    CommandesComponent,
    CouponsComponent,
    FacturesComponent,
    AjoutProduitComponent,
    AjoutCouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot( ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
