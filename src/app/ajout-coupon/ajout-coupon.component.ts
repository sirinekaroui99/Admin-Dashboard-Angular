import { Component, OnInit } from '@angular/core';
import { Coupon } from '../models/coupon';
import { CouponService } from '../services/coupon/coupon.service';

@Component({
  selector: 'app-ajout-coupon',
  templateUrl: './ajout-coupon.component.html',
  styleUrls: ['./ajout-coupon.component.css']
})
export class AjoutCouponComponent implements OnInit {
  code : string = ''
  constructor(private couponService : CouponService){}
  ngOnInit(): void {
    //this.getAleatoireCode()
  }


  getAleatoireCode() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     
    
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      const randomCaractere = caracteres.charAt(randomIndex);
      this.code += randomCaractere;
    }

    //const inputCode = document.getElementById('code') as HTMLInputElement;

// Définir la valeur du champ de saisie
  //  inputCode.value = this.code
 
  }
  

  newCoupon : Coupon = {
    id_coupon : 0,
    code : '',
    description : '',
    discountValue : 0,
    creationDate : '',
    endDate : '',
    active : false

  }
 
  onSave(){
    console.log('new coupon', this.code) 
    this.couponService.addCoupon(this.newCoupon).subscribe(
      res => {
        console.log('ajout de coupon ', res)
      }
    )
  }

}
