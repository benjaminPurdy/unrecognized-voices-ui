/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersApiService } from './users-api.service';

describe('UsersApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersApiService]
    });
  });

  it('should ...', inject([UsersApiService], (service: UsersApiService) => {
    expect(service).toBeTruthy();
  }));
});
