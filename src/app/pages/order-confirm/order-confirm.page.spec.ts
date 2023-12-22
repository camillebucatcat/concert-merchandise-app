import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderConfirmPage } from './order-confirm.page';

describe('OrderConfirmPage', () => {
  let component: OrderConfirmPage;
  let fixture: ComponentFixture<OrderConfirmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
