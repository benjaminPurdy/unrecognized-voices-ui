/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepsApiService } from './reps-api.service';

describe('RepsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepsApiService]
    });
  });

  it('should ...', inject([RepsApiService], (service: RepsApiService) => {
    expect(service).toBeTruthy();
  }));
});
