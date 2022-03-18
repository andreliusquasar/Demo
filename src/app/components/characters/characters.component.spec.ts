import { NotificationI18nService } from './../../core/notification-language.service';
import { ServiceRequest } from './../../shared/services/service-request.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { CharactersComponent } from './characters.component';
import { of, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CardListComponent } from '../card-list-component/card-list-component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let languageService: NotificationI18nService;

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
    },
  ];

  const translateStub: Partial<TranslateService> = {
    setDefaultLang: () => {}
  }

  const serviceStub: Partial<ServiceRequest> = {
    getCharacters: () => of(charactersMock)
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
      declarations: [ 
        CharactersComponent,
        CardListComponent
      ],
      imports: [HttpClientTestingModule],
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
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    languageService = TestBed.inject(NotificationI18nService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call redirecTo', () => {
    spyOn(component, 'redirectTo').and.callThrough();
    component.redirectTo(1);
    expect(component.redirectTo).toHaveBeenCalled();
  });

  it('should call redirecTo', () => {
    spyOn(languageService, 'getLanguageI18n').and.callThrough();
    component.ngOnInit();
    languageService.getLanguageI18n().subscribe();
    languageService.setLanguageI18n('en');
    expect(languageService.getLanguageI18n).toHaveBeenCalled();
  });
});
