import { TestBed } from '@angular/core/testing';

import { FakerService } from './faker.service';

describe('FakerService', () => {
  let service: FakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
