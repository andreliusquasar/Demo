import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ServiceRequest } from './../../../shared/services/service-request.service';
import { NotificationI18nService } from './../../../core/notification-language.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  const charactersMock = [
    {
      id: 2,
      name: 'nameMock',
      status: 'statusMock',
      species: 'speciesMock',
      type: 'typeMock',
      gender: 'genderMock',
      origin: { name: 'nameMock', url: 'urlMock' },
      location: { name: 'nameMock', url: 'urlMock' },
      image: 'imageMock',
      episode: ['string'],
      url: 'urlMock',
      created: 'createdMock',
    }
  ];

  const translateStub: Partial<TranslateService> = {
    setDefaultLang: () => {},
  };

  const serviceStub: Partial<ServiceRequest> = {
    getCharacters: () => of(charactersMock),
    getCharactersDetail: () => jasmine.createSpyObj('ServiceRequest', ['getCharactersDetail']).and.returnValue(of(charactersMock[0]))
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [CharacterDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerStub },
        { provide: TranslateService, useValue: translateStub },
        { provide: ServiceRequest, useValue: serviceStub },
        { provide: NgxSpinnerService, useValue: ngxSpinnerServiceStub },
        { provide: NotificationI18nService, useValue: languageServiceStub }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
