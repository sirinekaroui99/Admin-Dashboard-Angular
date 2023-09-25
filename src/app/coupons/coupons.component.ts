import { Component, OnInit } from '@angular/core';
import { Coupon } from '../models/coupon';
import { CouponService } from '../services/coupon/coupon.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit{

  coupons : Coupon[] = []

constructor(private couponService : CouponService, private router : Router, private toastr :ToastrService ){}
ngOnInit(): void {
  this.getCoupons()
}

addCoupon(){
  this.router.navigateByUrl('/ajoutCoupon')
}
 
statusChanged(coupon : Coupon){
this.toastr.warning('Coupon désactivé', 'Statut coupon');
console.log('statut coupon' ,coupon.id_coupon )
this.couponService.updateCoupon(coupon).subscribe(
  res => {
    console.log('satus changed')
  }
)
}
getCoupons(){
this.couponService.getCoupons().subscribe( 
  res =>{
    this.coupons = res
     
  }
)
}

deleteCoupon(id_coupon : any){
  this.couponService.deleteCoupon(id_coupon).subscribe(
    res => {
      this.toastr.success('Coupon supprimé avec succès', 'Succès');
      this.getCoupons()
    }
  )
}

}
