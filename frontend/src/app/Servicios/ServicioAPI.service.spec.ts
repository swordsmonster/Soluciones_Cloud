/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioAPIService } from './ServicioAPI.service';

describe('Service: ServicioAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioAPIService]
    });
  });

  it('should ...', inject([ServicioAPIService], (service: ServicioAPIService) => {
    expect(service).toBeTruthy();
  }));
});
