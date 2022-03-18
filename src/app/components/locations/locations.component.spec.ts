import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequest } from './../../shared/services/service-request.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationI18nService } from './../../core/notification-language.service';

import { LocationsComponent } from './locations.component';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  const locationsMock = [
    {
      id:	        2,
      name:	    'string',
      type:	    'string',
      dimension:	'string',
      residents:	['string'],
      url:	    'string',
      created:	'string',
    }
  ];

  const translateStub: Partial<TranslateService> = {
    setDefaultLang: () => {}
  }

  const serviceStub: Partial<ServiceRequest> = {
    getLocations: () => of(locationsMock)
  }

  const ngxSpinnerServiceStub: Partial<NgxSpinnerService> = {
    show: () => new Promise((res, __) => res({}),),
    hide: () => new Promise((res, __) => res({}),)
  };

  const languageServiceStub: Partial<NotificationI18nService> = {
    getLanguageI18n: () => new Subject<string>(),
    setLanguageI18n: () => {}
  }

  const routerStub = {
    navigate: () => Promise.resolve()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ LocationsComponent ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: TranslateService, useValue: translateStub },
        { provide: ServiceRequest, useValue: serviceStub },
        { provide: NgxSpinnerService, useValue: ngxSpinnerServiceStub },
        { provide: NotificationI18nService, useValue: languageServiceStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call redirecTo', () => {
    spyOn(component, 'redirectTo').and.callThrough();
    component.redirectTo(1);
    expect(component.redirectTo).toHaveBeenCalled();
  });
});
