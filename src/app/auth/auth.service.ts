import { Injectable } from '@angular/core';
import { Role } from './role.enum';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';
import * as decode from 'jwt-decode'; // para decodificar contenido del token
import { CacheService } from './cache.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService extends CacheService {
  token = null;

  // private readonly authProvider: (email: string, password: string) => Observable<IServerAuthResponse>;
  authStatus = new BehaviorSubject<IAuthStatus>(this.getItem('authStatus') || defaulAuthStatus);

  constructor(private httpClient: HttpClient) {
    super();
    this.authStatus.subscribe(authStatus => {
      this.setItem('authStatus', authStatus);
    });
    // this.authProvider = this.userAuthProvider;
   }
  public login2(email: string, password: string): Observable<any> {
    this.token = this.httpClient.post( 'User/authenticate', { email:email, password: password}, {responseType: 'text'});
    return this.token;
  }
  public extraInfo(token: string) {
    this.setToken(token);
    const result = decode(token);
    this.setItem('authStatus', result as IAuthStatus);
    return result as IAuthStatus;
  }
  logout() {
    this.clearToken();
  }

  getToken(): string {
    return this.getItem('jwt' || '');
  }

  private setToken(jwt: string) {
    this.setItem('jwt', jwt);
  }
  private clearToken() {
    this.removeItem('jwt');
    localStorage.clear();
  }
  public getAuthStatus(): IAuthStatus {
    return this.getItem('authStatus');
  }
}
export interface IAuthStatus {
  unique_name: string;
  role: Role;
}

interface IServerAuthResponse {
  access_token: string;
}
const defaulAuthStatus: IAuthStatus = {role: Role.None, unique_name: null};
