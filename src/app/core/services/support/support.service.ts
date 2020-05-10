import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Support } from './../../../core/model/support.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  constructor(private http: HttpClient) {}

  getAllSupports(): Observable<Support[]> {
    return this.http.get<Support[]>(`${environment.url_api}/support`);
  }

  getSupport(supportID: string): Observable<Support> {
    return this.http.get<Support>(
      `${environment.url_api}/support/${supportID}`
    );
  }
  createSupport(support: Support): Observable<Support> {
    return this.http.post<Support>(
      `${environment.url_api}/support/create`,
      support
    );
  }

  deleteSupport(supportID: string): Observable<Support> {
    return this.http.delete<Support>(
      `${environment.url_api}/support/delete?supportID=${supportID}`
    );
  }

  updateSupport(supportID: string, support: Support): Observable<Support> {
    return this.http.put<Support>(
      `${environment.url_api}/support/update?supportID=${supportID}`,
      support
    );
  }
}
