
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '../shared/interfaces/api-response.interface';
import { Location } from '../shared/interfaces/data-interfaces/locations.interfaces';
import { Criteria } from '../shared/interfaces/common.interfaces';
/* TODO: add criteria thin */
@Injectable({
  providedIn: 'root',
})
export class TestService {

  private apiService = inject(ApiService)

  /* TODO: fix unknow tipe */
  getTestData(): Observable<any> {

    return this.apiService.get<any>(`https://menu.tillersystems.com/internal/stores/40726/menus/1`).pipe(
      catchError((error) => throwError(() => new Error(`Api Error ${error}`)))
    )       
 
  }


}
