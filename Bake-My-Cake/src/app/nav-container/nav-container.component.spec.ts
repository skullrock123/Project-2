import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContainerComponent } from './nav-container.component';

describe('NavContainerComponent', () => {
  let component: NavContainerComponent;
  let fixture: ComponentFixture<NavContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavContainerComponent]
    });
    fixture = TestBed.createComponent(NavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
