import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '../shared/interfaces/api-response.interface';
import { Criteria } from '../shared/interfaces/common.interfaces';
import { Episode } from '../shared/interfaces/data-interfaces/episode.interfaces';

@Injectable({
  providedIn: 'root',
})

export class EpisodesService {

  apiService = inject(ApiService)

  getEpisodes(criteria: Criteria): Observable<ApiResponse<Episode>> {
    const params = Object.fromEntries(
      Object.entries(criteria).filter(([_, value]) => value)
    );
      return this.apiService.get<ApiResponse<Episode>>(`episode`, { params }).pipe(
        catchError((error) => {
          return throwError(() => new Error(`Error api ${error}`))
        })
      )
  }

  getEpisodeByid(id: string | null): Observable<Episode> {
    return this.apiService.get<Episode>(`episode/${id}`).pipe(
      catchError((error) => {
        return throwError(() => new Error(`Error Api ${error}`))
      })
    )
  }
 
}
