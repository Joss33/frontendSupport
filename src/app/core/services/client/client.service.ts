import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './../../../core/model/client.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  getAllClients() {
    return this.http.get<Client[]>(`${environment.url_api}/client`);
  }

  getClient() {}
}
