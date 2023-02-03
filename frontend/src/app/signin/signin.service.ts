import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Signinresponse } from './signinresponse';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }

  public postSignin(email:String, contrasena:String):Observable<Signinresponse>
  {
    var user = {'email' : email, 'contrasena' : contrasena};
    const headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post<Signinresponse>('http://127.0.0.1:5000/signin',JSON.stringify(user),{headers:headers})
  }

}
