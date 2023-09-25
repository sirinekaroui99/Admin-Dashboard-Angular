import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private apiUrl = 'http://localhost:8081/SpringMVC/servlet';

  constructor(private http: HttpClient) { }

  getCoupons(){
    return this.http.get<Coupon[]>(`${this.apiUrl}/promotionCards`)
  }

  getCouponById(){

  }

  addCoupon(coupon : Coupon){
    return this.http.post<Coupon[]>(`${this.apiUrl}/addPromotionCard`, coupon)
  }

  deleteCoupon(id_coupon : number){
    return this.http.delete(`${this.apiUrl}/deletePromotionCardById/${id_coupon}`)
  }
 
  updateCoupon(coupon : Coupon){
    return this.http.put<Coupon[]>(`${this.apiUrl}/UpdatePromotionCard`, coupon)
  }
 
}
