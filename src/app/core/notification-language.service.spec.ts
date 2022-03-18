import { TestBed } from '@angular/core/testing';

import { NotificationI18nService } from './notification-language.service';

describe('NotificationI18nService', () => {
  let service: NotificationI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationI18nService]
    });
    service = TestBed.inject(NotificationI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return br string', () => {
    service.getLanguageI18n().subscribe(res => {
      expect(res).toEqual('br');
    });
    service.setLanguageI18n('br');
  });
  
});
