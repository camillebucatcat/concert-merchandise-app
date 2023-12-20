import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedBandPage } from './featured-band.page';

describe('FeaturedBandPage', () => {
  let component: FeaturedBandPage;
  let fixture: ComponentFixture<FeaturedBandPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeaturedBandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
