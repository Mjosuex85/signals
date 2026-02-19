import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class ApiService {

    private readonly BASE_URL = 'https://rickandmortyapi.com/api/';
    http = inject(HttpClient)

    get<T>(url: string, options?: object): Observable<T> { 
        return this.http.get<T>(`${this.BASE_URL}${this.buildUrl(url)}`, options).pipe(
         catchError(this.handleError)
        );
    } 
    
    post<T>(url: string, options?: object): Observable<T> {  
        return this.http.get<T>(
          `${this.BASE_URL}${this.buildUrl(url)}`, 
          options
        ).pipe(
         catchError(this.handleError)
        );
    }  

    put<T>(url: string, options?: object): Observable<T> {  
        return this.http.get<T>(
          `${this.BASE_URL}${this.buildUrl(url)}`, 
          options
        ).pipe(
         catchError(this.handleError)
        );
    }  

    delete<T>(url: string, options?: object): Observable<T> {  
        return this.http.get<T>(
          `${this.BASE_URL}${this.buildUrl(url)}`, 
          options
        ).pipe(
         catchError(this.handleError)
        );
    }  

    private handleError(error: Error) {
        console.error('API error:', error);
        console.warn(error.message)
        return throwError(() => {});
    }

    private buildUrl(url: string): string {
         return  url.startsWith('/')
    ? url.slice(1)
    : url;  
    }

    

}
