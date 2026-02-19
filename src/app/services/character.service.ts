import { Injectable, WritableSignal } from '@angular/core';
import { Character } from '../shared/interfaces/data-interfaces/characters.interface';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '../shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root',
})


export class CharacterService {
  
  constructor(private apiService: ApiService) {}

 getAllCharacters(criteria?: any): Observable<ApiResponse<Character>> {
    const params = Object.fromEntries(
      Object.entries(criteria).filter(([_, value]) => value)
    );

    const emptyResponse: ApiResponse<Character> = {
      info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null
      },
      results: []
    };

  

  return this.apiService.get<ApiResponse<Character>>(`character`, { params }).pipe(
    catchError((error) => {
      if (error.status === 404) {
    return of(emptyResponse);
  }
      return throwError(() => new Error(`Error api ${error}`))
    })
  )
} 

 getCharacterById(id?: string): Observable<Character> {
    return this.apiService.get<Character>(`character/${id}`).pipe(
      catchError((error) => {
        return throwError(() => new Error(`Error api ${error}`))
      })
    )
 }

}
