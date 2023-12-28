import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForDeliveryPage } from './for-delivery.page';

describe('ForDeliveryPage', () => {
  let component: ForDeliveryPage;
  let fixture: ComponentFixture<ForDeliveryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForDeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
