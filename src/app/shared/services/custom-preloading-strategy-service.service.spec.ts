import { TestBed } from '@angular/core/testing';

import { CustomPreloadingStrategyServiceService } from './custom-preloading-strategy-service.service';

describe('CustomPreloadingStrategyServiceService', () => {
  let service: CustomPreloadingStrategyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadingStrategyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
