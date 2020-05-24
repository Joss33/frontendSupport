import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../model/user.model';
import { environment } from './../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    return this.http.post<any>(`${environment.url_api}/auth/login`, user);
  }

  // tslint:disable-next-line: ban-types
  loggedIn(): Boolean {
    // tslint:disable-next-line: no-unused-expression
    return !!localStorage.getItem('access_token');
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    // localStorage.removeItem('Autorization');
    this.router.navigate(['/login']);
  }
}
