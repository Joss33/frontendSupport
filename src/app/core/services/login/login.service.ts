import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../model/user.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(`${environment.url_api}/auth/login`, user);
  }
}
