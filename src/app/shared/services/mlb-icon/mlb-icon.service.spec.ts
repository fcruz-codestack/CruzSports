import { TestBed } from '@angular/core/testing';

import { MlbIconService } from './mlb-icon.service';

describe('MlbIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MlbIconService = TestBed.get(MlbIconService);
    expect(service).toBeTruthy();
  });
});
