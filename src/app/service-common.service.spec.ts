import { TestBed } from '@angular/core/testing';

import { ServiceCommonService } from './service-common.service';

describe('ServiceCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCommonService = TestBed.get(ServiceCommonService);
    expect(service).toBeTruthy();
  });
});
