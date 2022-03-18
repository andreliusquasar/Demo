import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServiceRequest } from './service-request.service';

describe('ServiceRequest', () => {
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
    }
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

  const episodesMock = [
    {
      id:	        2,
      name:	    'string',
      air_date:	'string',
      episode:	'string',
      characters:	[{name: 'string'}],
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
  
  it('should call getLocations method', () => {
    service.getLocations().subscribe((res) => {
      expect(res.length).toBe(1);
      expect(res).toEqual(locationsMock);
    });
    const req = httpMock.expectOne('https://rickandmortyapi.com/api/location');
    expect(req.request.method).toBe('GET');
    req.flush(locationsMock);
  });
  
  it('should call getLocationsDetail method', () => {
    service.getLocationDetail(1).subscribe((res) => {
      expect(res).toEqual(locationsMock[0]);
    });
    const req = httpMock.expectOne(`https://rickandmortyapi.com/api/location/${1}`);
    expect(req.request.method).toBe('GET');
    req.flush(locationsMock[0]);
  });

  it('should call getEpisodes method', () => {
    service.getEpisodes().subscribe((res) => {
      expect(res.length).toBe(1);
      expect(res).toEqual(episodesMock);
    });
    const req = httpMock.expectOne('https://rickandmortyapi.com/api/episode');
    expect(req.request.method).toBe('GET');
    req.flush(episodesMock);
  });
  
  it('should call getEpisodeDetail method', () => {
    service.getEpisodeDetail(1).subscribe((res) => {
      expect(res).toEqual(episodesMock[0]);
    });
    const req = httpMock.expectOne(`https://rickandmortyapi.com/api/episode/${1}`);
    expect(req.request.method).toBe('GET');
    req.flush(episodesMock[0]);
  });

});
