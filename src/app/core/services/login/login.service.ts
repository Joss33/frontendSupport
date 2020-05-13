import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './../../model/user.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // private token: string;
  constructor(public http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post<User>(`${environment.url_api}/auth/login`, user);
  }
}
