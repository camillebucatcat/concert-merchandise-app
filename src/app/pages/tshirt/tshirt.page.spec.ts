import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TshirtPage } from './tshirt.page';

describe('TshirtPage', () => {
  let component: TshirtPage;
  let fixture: ComponentFixture<TshirtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TshirtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
