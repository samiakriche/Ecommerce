import { Injectable } from '@angular/core';
const TOKEN_KEY = 'token';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }
  signOut(): void {
    window.localStorage.clear();
  }
  public saveToken(token: string): void {
    console.log("this is token "+token);
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    let data =localStorage.getItem(TOKEN_KEY)
    console.log(data)
    return data

  }
  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));

    window.sessionStorage.removeItem(USER_KEY);
 
    const encodedValue = window.btoa(JSON.stringify(user));
    window.sessionStorage.setItem(USER_KEY, encodedValue);
    window.sessionStorage.setItem('utilisateur', JSON.stringify(user.utilisateur));

  }

  public getUtilisateur(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(window.atob(user));
    }
    return {};
  }

  
  public getUser() {
    const user = window.localStorage.getItem(USER_KEY);    
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
