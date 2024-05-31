import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanburgerMenuComponent } from './hanburger-menu.component';

describe('HanburgerMenuComponent', () => {
  let component: HanburgerMenuComponent;
  let fixture: ComponentFixture<HanburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HanburgerMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HanburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
