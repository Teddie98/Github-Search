import { TestBed } from '@angular/core/testing';

import { Github } from './Github';

describe('Github', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Github = TestBed.get(Github);
    expect(service).toBeTruthy();
  });
});