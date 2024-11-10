import { TestBed } from '@angular/core/testing';

import { AuthenticateService } from './cognito-service.service';

describe('CognitoServiceService', () => {
  let service: AuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
