import { HttpClient } from '@angular/common/http';

import { ICharacter } from './../models/character.model';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    constructor(private http: HttpClient) {}

    getCharacters(): Observable<ICharacter[]> {
      return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/character');
    }
    
    getLocations(): Observable<ICharacter[]> {
      return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/location');
    }

    getEpisodes(): Observable<ICharacter[]> {
      return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/episodes');
    }
}
