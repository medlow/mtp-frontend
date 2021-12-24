

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private getUrl: string = "http://localhost:8080/api/v1/categories";

  constructor(private _httpClient: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this._httpClient.get<Categorie[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveCategorie(categorie: Categorie): Observable<Categorie> {
    return this._httpClient.post<Categorie>(this.getUrl, categorie);
  }

  getCategorie(id: number): Observable<Categorie> {
    return this._httpClient.get<Categorie>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteCategorie(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}

