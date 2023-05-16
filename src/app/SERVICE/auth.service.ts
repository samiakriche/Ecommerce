import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACK_API = environment.baseURL;
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }
  /**
     * Performs the auth
     * @param username username of user
     * @param password password of user
     */


/* 
  login(body:any): Observable<any>{
    //console.log(body)
    return this.http.post(BACK_API+`/auth/singin`, body)
} */
login(username: string, password: string): Observable<any> {
  return this.http.post(
    AUTH_API + 'signin',
    {
      username,
      password,
    },
    httpOptions
  );
}
logout(): Observable<any> {
  return this.http.post(AUTH_API + 'signout', { }, httpOptions);
}
}
