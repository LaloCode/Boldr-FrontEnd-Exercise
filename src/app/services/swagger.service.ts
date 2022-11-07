import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SwaggerWorkResponse } from '../interfaces/works.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {

  private url: string = 'https://api.crossref.org/works';

  constructor( private http: HttpClient ) { }

  getWorksList() {
    return this.http.get<SwaggerWorkResponse>(`${ this.url }`)
  }
}
