import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeychainPage } from './keychain.page';

describe('KeychainPage', () => {
  let component: KeychainPage;
  let fixture: ComponentFixture<KeychainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KeychainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
