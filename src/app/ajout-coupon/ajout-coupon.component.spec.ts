import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCouponComponent } from './ajout-coupon.component';

describe('AjoutCouponComponent', () => {
  let component: AjoutCouponComponent;
  let fixture: ComponentFixture<AjoutCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
