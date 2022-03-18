import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequest } from './../../shared/services/service-request.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationI18nService } from './../../core/notification-language.service';

import { EpisodesComponent } from './episodes.component';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;

  const episodesMock = [
    {
      id:	      2,
      name:	    'string',
      air_date:	'string',
      episode:	'string',
      characters:	[{name: 'string'}],
      url:	    'string',
      created:	'string',
    }
  ];

  const translateStub: Partial<TranslateService> = {
    setDefaultLang: () => {},
  };

  const serviceStub: Partial<ServiceRequest> = {
    getEpisodes: () => of(episodesMock),
    getEpisodeDetail: () => jasmine.createSpyObj('ServiceRequest', ['getEpisodeDetail']).and.returnValue(of(episodesMock[0]))
  };

  const ngxSpinnerServiceStub: Partial<NgxSpinnerService> = {
    show: () => new Promise((res) => res({})),
    hide: () => new Promise((res) => res({})),
  };

  const languageServiceStub: Partial<NotificationI18nService> = {
    getLanguageI18n: () => new Subject<string>(),
    setLanguageI18n: () => {},
  };

  const routerStub = {
    navigate: () => Promise.resolve(),
  };

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (id: string) => ''
      }
    },
    queryParams: { subscribe: () => ({}) },
    params: of(2)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ EpisodesComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
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
    fixture = TestBed.createComponent(EpisodesComponent);
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
