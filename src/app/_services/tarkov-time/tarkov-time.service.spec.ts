import { TestBed } from '@angular/core/testing';

import { TarkovTimeService } from './tarkov-time.service';

describe('TarkovTimeService', () => {
  let service: TarkovTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarkovTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
