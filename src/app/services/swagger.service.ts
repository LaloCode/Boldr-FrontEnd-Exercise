import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SwaggerWorkResponse } from '../interfaces/works.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {

  private url: string = 'https://api.crossref.org/works';

  constructor( private http: HttpClient ) { }

  getWorksList(): Observable<SwaggerWorkResponse> {
    return this.http.get<SwaggerWorkResponse>(`${ this.url }`)
  }
}
