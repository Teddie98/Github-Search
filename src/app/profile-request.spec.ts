import { TestBed } from '@angular/core/testing';

import { ProfileRequest } from './profile-request';

describe('GithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileRequest= TestBed.get(ProfileRequest);
    expect(service).toBeTruthy();
  });
});