

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private getUrl: string = "http://localhost:8080/api/v1/factures";

  constructor(private _httpClient: HttpClient) { }

  getFactures(): Observable<Facture[]> {
    return this._httpClient.get<Facture[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveFacture(facture: Facture): Observable<Facture> {
    return this._httpClient.post<Facture>(this.getUrl, facture);
  }

  getFacture(id: number): Observable<Facture> {
    return this._httpClient.get<Facture>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }
  getAll(): Observable<any> {
   
    return this._httpClient.get(`${this.getUrl}`);
  }
  deleteFacture(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}

