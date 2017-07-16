/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BillsApiService } from './bills-api.service';

describe('BillsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillsApiService]
    });
  });

  it('should ...', inject([BillsApiService], (service: BillsApiService) => {
    expect(service).toBeTruthy();
  }));
});
