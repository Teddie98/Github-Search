import { TestBed } from '@angular/core/testing';

import { SweetAlert } from './sweet-alert';

describe('SweetAlert', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweetAlert = TestBed.get(SweetAlert);
    expect(service).toBeTruthy();
  });
});