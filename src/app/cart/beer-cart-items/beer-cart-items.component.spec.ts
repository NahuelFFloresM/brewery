import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCartItemsComponent } from './beer-cart-items.component';

describe('BeerCartItemsComponent', () => {
  let component: BeerCartItemsComponent;
  let fixture: ComponentFixture<BeerCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerCartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
