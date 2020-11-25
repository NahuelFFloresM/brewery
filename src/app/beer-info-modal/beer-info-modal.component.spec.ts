import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerInfoModalComponent } from './beer-info-modal.component';

describe('BeerInfoModalComponent', () => {
  let component: BeerInfoModalComponent;
  let fixture: ComponentFixture<BeerInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
