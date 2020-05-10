import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './../../../core/model/client.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.url_api}/client`);
  }

  getClient(clientID: string): Observable<Client> {
    return this.http.get<Client>(`${environment.url_api}/client/${clientID}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(
      `${environment.url_api}/client/create`,
      client
    );
  }

  deleteClient(clientID: string): Observable<Client> {
    return this.http.delete<Client>(
      `${environment.url_api}/client/delete?clientID=${clientID}`
    );
  }

  updateClient(clientID: string, client: Client): Observable<Client> {
    return this.http.put<Client>(
      `${environment.url_api}/client/update?clientID=${clientID}`,
      client
    );
  }
}
