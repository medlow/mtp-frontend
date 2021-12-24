

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private getUrl: string = "http://localhost:8080/api/v1/articles";

  constructor(private _httpClient: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this._httpClient.get<Article[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveArticle(article: Article): Observable<Article> {
    return this._httpClient.post<Article>(this.getUrl, article);
  }

  getArticle(id: number): Observable<Article> {
    return this._httpClient.get<Article>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }
  getAll(): Observable<any> {
   
    return this._httpClient.get(`${this.getUrl}`);
  }
  deleteArticle(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}

