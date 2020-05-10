import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../model/user.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.url_api}/user`);
  }
  getUser(clientID: string): Observable<User> {
    return this.http.get<User>(`${environment.url_api}/client/${clientID}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.url_api}/user/create`, user);
  }

  deleteUser(userID: string): Observable<User> {
    return this.http.delete<User>(
      `${environment.url_api}/user/delete?userID=${userID}`
    );
  }

  updateUser(userID: string, user: User): Observable<User> {
    return this.http.put<User>(
      `${environment.url_api}/user/update?userID=${userID}`,
      user
    );
  }
}
