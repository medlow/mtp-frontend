

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private getUrl: string = "http://localhost:8080/api/v1/clients";

  constructor(private _httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this._httpClient.get<Client[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveClient(client: Client): Observable<Client> {
    return this._httpClient.post<Client>(this.getUrl, client);
  }

  getClient(id: number): Observable<Client> {
    return this._httpClient.get<Client>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteClient(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}

