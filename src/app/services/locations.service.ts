import { Location } from '../shared/interfaces/data.interface';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '../shared/interfaces/Response.interface';
import { Criteria } from '../shared/interfaces/common.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {

  private apiService = inject(ApiService)

  getAllLocations(criteria?: any): Observable<ApiResponse<Location>> {
    const params = Object.fromEntries(
      Object.entries(criteria).filter(([_, value]) => value)
    );
    
    return this.apiService.get<ApiResponse<Location>>(`location`, { params }).pipe(
      catchError((error) => throwError(() => new Error(`Api Error ${error}`)))
    )
  }

  getLocationsById(id: string): Observable<ApiResponse<Location>> {
    return this.apiService.get<ApiResponse<Location>>(`location/${id}`).pipe(
      catchError((error) => throwError(() => new Error(`Api Error ${error}`))) 
    )
  }

}
