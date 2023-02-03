import { Injectable } from '@angular/core';
// Agregado
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login } from '../login/login';
import { Loginresponse } from '../login/loginresponse';
import { Evento } from '../eventos/evento';
import { Signinresponse } from '../signin/signinresponse';
//import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIService {

  baseurl = 'http://127.0.0.1:5000'
  constructor(private http:HttpClient) { }

  public postLogin(email:String, contrasena:String):Observable<Loginresponse>
  {
    var user = {'email' : email, 'contrasena' : contrasena};
    const headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post<Loginresponse>(this.baseurl + '/login',JSON.stringify(user),{headers:headers})
    /*.subscribe(data => {
      console.log(data);
    });*/

    //return this.http.get<Login>('http://127.0.0.1:5000/login')
  }

  public getEventos(id:String):Observable<Evento[]>
  {
    return this.http.get<Evento[]>(this.baseurl + '/usuario/1/eventos')
  }

  public postSignin(email:String, contrasena:String):Observable<Signinresponse>
  {
    var user = {'email' : email, 'contrasena' : contrasena};
    const headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post<Signinresponse>(this.baseurl + '/signin',JSON.stringify(user),{headers:headers})
  }

}
