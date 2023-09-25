import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from '../models/coupon';
import { CouponService } from '../services/coupon/coupon.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  coupons : Coupon[] = []
  coupon = true
  couponfalse = false
constructor(private couponService : CouponService, private router : Router, private toastr : ToastrService){}
ngOnInit(): void {
 
}

addCoupon(){
  this.router.navigateByUrl('/ajoutCoupon')
}
 
statusChanged(coupon : Coupon){
console.log('statut coupon' ,coupon.id_coupon )
this.couponService.updateCoupon(coupon).subscribe(
  res => {
    console.log('satus changed')
  }
)
}

delete(){
  this.toastr.success('Utilisateur supprimé avec succès', 'Succès');
}
}
