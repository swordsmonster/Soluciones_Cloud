import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Agregado
import { Login } from './login';
import { Loginresponse } from './loginresponse';
// Suscribiendose al servicio
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// implements OnInit
export class LoginComponent implements OnInit{

  public login: Login;
  loginresponse: Loginresponse;
  router: Router

  errorMessage = "Datos Incorrectos";
  failedLogin = false;

  //email = ""
  //password = ""
  //email: String = "";
  //password: String = "";

  //constructor(private router: Router) { }
  constructor(private LoginService: LoginService) { }

  ngOnInit() {
    this.login = {
      id: 0,
      email: '',
      contrasena: ''
    }

    //this.handleLogin();
  }

  handleLogin() : void {

    //this.LoginService.postLogin(this.email, this.password).subscribe(cs => {this.loginresponse = cs;});
    this.LoginService.postLogin(this.login.email, this.login.contrasena).subscribe(cs => {this.loginresponse = cs;});
    console.log(this.loginresponse.mensaje)

    // this.eventosService.getEventos('').subscribe(cs => {this.eventos = cs;})
    if(this.loginresponse.mensaje === "Inicio de sesión exitoso") {
      // Redirect to Welcome Page
      //this.router.navigate(['eventos', this.login.email])
      this.failedLogin = false

    } else {
      this.failedLogin = true
    }

    console.log(this.failedLogin)
  }

  handleSignin() : void {
    this.router.navigate(['signin'])
  }
}

