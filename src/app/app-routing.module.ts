import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FacturesComponent } from './factures/factures.component';
import { CouponsComponent } from './coupons/coupons.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { AjoutCouponComponent } from './ajout-coupon/ajout-coupon.component';

const routes: Routes = [
  { path : '' , component: IndexComponent},
  { path: 'login', component:LoginComponent },
  { path: 'forms', component:FormsComponent },
  { path:'profile', component:ProfileComponent },
  { path: 'produits', component: ProductsComponent },
  { path:'users', component: UsersComponent },
  { path:'commandes', component: CommandesComponent },
  { path:'facture', component:FacturesComponent },
  { path: 'coupons', component:CouponsComponent },
  { path:'ajoutProduit', component:AjoutProduitComponent },
  { path:'ajoutCoupon', component: AjoutCouponComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
 