import { HttpClient } from '@angular/common/http';

import { ICharacter } from './../models/character.model';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { ILocation } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequest {

    constructor(private http: HttpClient) {}

    getCharacters(): Observable<ICharacter> {
      return this.http.get<ICharacter>('https://rickandmortyapi.com/api/character');
    }

    getCharactersDetail(id: number): Observable<ICharacter> {
      return this.http.get<ICharacter>(`https://rickandmortyapi.com/api/character/${id}`);
    }

    getLocations(): Observable<ICharacter[]> {
      return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/location');
    }
   
    getLocationDetail(id: number): Observable<ILocation> {
      return this.http.get<ILocation>(`https://rickandmortyapi.com/api/location/${id}`);
    }

    getEpisodes(): Observable<ICharacter[]> {
      return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/episode');
    }
}
