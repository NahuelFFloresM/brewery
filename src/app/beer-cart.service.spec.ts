import { TestBed } from '@angular/core/testing';

import { BeerCartService } from './beer-cart.service';

describe('BeerCartService', () => {
  let service: BeerCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
