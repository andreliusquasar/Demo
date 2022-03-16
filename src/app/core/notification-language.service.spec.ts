import { TestBed } from '@angular/core/testing';

import { NotificationI18nService } from './notification-language.service';

describe('NotificationI18nService', () => {
  let service: NotificationI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
