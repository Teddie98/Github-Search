import { TestBed } from '@angular/core/testing';

import { github } from './Github';

describe('GithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: github = TestBed.get(github);
    expect(service).toBeTruthy();
  });
});