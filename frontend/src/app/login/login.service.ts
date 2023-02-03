import { Injectable } from '@angular/core';
// Agregado
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login } from './login';
import { Loginresponse } from './loginresponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) { }

  public postLogin(email:String, contrasena:String):Observable<Loginresponse>
  {
    var user = {'email' : email, 'contrasena' : contrasena};
    const headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post<Loginresponse>('http://127.0.0.1:5000/login',JSON.stringify(user),{headers:headers})
    /*.subscribe(data => {
      console.log(data);
    });*/

    //return this.http.get<Login>('http://127.0.0.1:5000/login')
  }

}
