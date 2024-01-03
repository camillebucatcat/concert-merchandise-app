import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapsPage } from './caps.page';

describe('CapsPage', () => {
  let component: CapsPage;
  let fixture: ComponentFixture<CapsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
