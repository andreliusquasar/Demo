import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ServiceRequest } from './service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('ServiceRequest', () => {
  let service: ServiceRequest;
  let httpMock: HttpTestingController;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ServiceRequest],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ServiceRequest);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getCharacters method', () => {
    service.getCharacters().subscribe((res) => {
      expect(res.length).toBe(1);
      expect(res).toEqual(charactersMock);
    });
    const req = httpMock.expectOne('https://rickandmortyapi.com/api/character');
    expect(req.request.method).toBe('GET');
    req.flush(charactersMock);
  });
  
  it('should call getCharactersDetail method', () => {
    service.getCharactersDetail(1).subscribe((res) => {
      expect(res).toEqual(charactersMock[0]);
    });
    const req = httpMock.expectOne(`https://rickandmortyapi.com/api/character/${1}`);
    expect(req.request.method).toBe('GET');
    req.flush(charactersMock[0]);
  });

});
