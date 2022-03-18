import { HttpClient } from '@angular/common/http';

import { ICharacter } from '../models/character.model';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { ILocation } from '../models/location.model';
import { IEpisode } from '../models/episode.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequest {

    constructor(private http: HttpClient) {}

    getCharacters(page?: number): Observable<ICharacter[]> {
      const query = page ? `/character?page=${page}` : '/character';
      return this.http.get<ICharacter[]>(`${environment.apiUrl}${query}`);
    }

    getCharactersDetail(id: number): Observable<ICharacter> {
      return this.http.get<ICharacter>(`${environment.apiUrl}/character/${id}`);
    }

    getLocations(): Observable<ILocation[]> {
      return this.http.get<ILocation[]>(`${environment.apiUrl}/location`);
    }
   
    getLocationDetail(id: number): Observable<ILocation> {
      return this.http.get<ILocation>(`${environment.apiUrl}/location/${id}`);
    }

    getEpisodes(): Observable<IEpisode[]> {
      return this.http.get<IEpisode[]>(`${environment.apiUrl}/episode`);
    }
    
    getEpisodeDetail(id: number): Observable<IEpisode> {
      return this.http.get<IEpisode>(`${environment.apiUrl}/episode/${id}`);
    }
}
