import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoAnimationPage } from './logo-animation.page';

describe('LogoAnimationPage', () => {
  let component: LogoAnimationPage;
  let fixture: ComponentFixture<LogoAnimationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogoAnimationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
