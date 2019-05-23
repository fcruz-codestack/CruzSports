import { TestBed } from '@angular/core/testing';

import { SingleScoreboardService } from './single-scoreboard.service';

describe('SingleScoreboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleScoreboardService = TestBed.get(SingleScoreboardService);
    expect(service).toBeTruthy();
  });
});
