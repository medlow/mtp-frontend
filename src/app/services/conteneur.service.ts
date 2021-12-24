

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Conteneur } from '../models/conteneur';

@Injectable({
  providedIn: 'root'
})
export class ConteneurService {

  private getUrl: string = "http://localhost:8080/api/v1/conteneurs";

  constructor(private _httpClient: HttpClient) { }

  getConteneurs(): Observable<Conteneur[]> {
    return this._httpClient.get<Conteneur[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveConteneur(conteneur: Conteneur): Observable<Conteneur> {
    return this._httpClient.post<Conteneur>(this.getUrl, conteneur);
  }

  getConteneur(id: number): Observable<Conteneur> {
    return this._httpClient.get<Conteneur>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteConteneur(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}

