import { Injectable } from '@angular/core';
import { Character } from '../shared/interfaces/data.interface';
import { Location } from '../shared/interfaces/data.interface';
import { characters } from './characters.mock';
import { episodes } from './episodes.mock';
import { Observable, of } from 'rxjs';
import { locations } from './locations.mock';
import { ApiResponse } from '../shared/interfaces/Response.interface';

@Injectable({
  providedIn: 'root',
})


@Injectable({
  providedIn: 'root',
})
export class MockService {

  public character?: Character[] = []

  constructor() {
    this.character = characters.results 
  }

  getCharacters(): Observable<ApiResponse<Character>> {
    return of(characters);
  }

  getEpisodes(): Observable<any> {
    return of(episodes.results);
  }

  getLocations(): Observable<ApiResponse<Location>> {
    return of(locations);
  }

  getCharacterById(id: number): Observable<Character | undefined> {
    return of(this.character?.find((e) => e.id === id))
  } 
}

