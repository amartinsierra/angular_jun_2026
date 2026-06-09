import { TestBed } from '@angular/core/testing';

import { TypiService } from './typi-service';

describe('TypiService', () => {
  let service: TypiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
