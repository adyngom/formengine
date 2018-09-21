import { TestBed } from '@angular/core/testing';

import { FormengineService } from './formengine.service';

describe('FormengineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormengineService = TestBed.get(FormengineService);
    expect(service).toBeTruthy();
  });
});
