import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
  private apiKey: string = "AIzaSyC_DG3SypRBo3PeDml0mXp9f_V-6jQJep0";
  userToken: string;
  constructor(private http: HttpClient) { 
    this.leerToken();
  }
  logout() {
    localStorage.removeItem('token');
    this.userToken="";

  }


  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}verifyPassword?key=${this.apiKey}`, authData).pipe(
      map(
        (resp)=>{
         console.log("Entro en el mapa rxjs login");
         this.guadarToken(resp['idToken']);
         return resp;
        }
      )
    );

  }



  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signupNewUser?key=${this.apiKey}`, authData).pipe(
      map(
        (resp)=>{
         console.log("Entro en el mapa rxjs nuevo usuario");
         this.guadarToken(resp['idToken']);
         return resp;
        }
      )
    );
  }



  guadarToken(idToken:string) {
  this.userToken=idToken;
  localStorage.setItem('token',idToken);
  }

  leerToken() {
    if(localStorage.getItem('token')){
      this.userToken=localStorage.getItem('token');
    }else{
      this.userToken="";
    }
   return this.userToken;
  }

  estaAutenticado():boolean{
    return this.userToken.length>2;
  }
}
