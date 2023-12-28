import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreparingPage } from './preparing.page';

describe('PreparingPage', () => {
  let component: PreparingPage;
  let fixture: ComponentFixture<PreparingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreparingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
