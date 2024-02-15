import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManagerComponent } from './item-manager.component';

describe('ItemManagerComponent', () => {
  let component: ItemManagerComponent;
  let fixture: ComponentFixture<ItemManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemManagerComponent]
    });
    fixture = TestBed.createComponent(ItemManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
