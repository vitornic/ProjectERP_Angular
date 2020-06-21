import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl: string;
  PHP_API_SERVER = "http://erpe-stock.com.br/api";
  //PHP_API_SERVER = "http://127.0.0.1:80/backend/api";
  baseUrl:string = "/backend/api";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }
    public userlogin(email, senha) {
      return this.httpClient.post<any>(this.PHP_API_SERVER + '/login.php', { email, senha }).pipe(map(usuario => {
      this.setToken(usuario[0].nome);
      this.getLoggedInName.emit(true);
      return usuario;
    }));
  }

  public userregistration(nome, email, senha) {
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/cadastro.php', { nome, email, senha }).pipe(map(usuario => {
      return usuario;
    }));
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
      return false;
  }
}