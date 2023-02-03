import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Agregado
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from './login';
import { Loginresponse } from './loginresponse';
import { ServicioAPIService } from '../Servicios/ServicioAPI.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// implements OnInit
export class LoginComponent implements OnInit{

  //public login: Login;
  loginresponse: Loginresponse;
  respuesta: any = [];

  errorMessage = "Datos Incorrectos";
  failedLogin = false;

  email = ""
  contrasena = ""

  constructor(
    private ServicioAPI: ServicioAPIService,
    private router: Router
    ) { }

  ngOnInit() {
    //
  }


  handleLogin() : void {

    this.ServicioAPI.postLogin(this.email, this.contrasena).subscribe(cs => {this.loginresponse = cs;
    console.log(this.loginresponse.mensaje)

    if(this.loginresponse.mensaje === "Inicio de sesión exitoso") {
      // Redirect to Welcome Page
      this.router.navigate(['eventos', '1'])
      this.failedLogin = false

    } else {
      this.failedLogin = true
    }

    console.log(this.failedLogin)
    });
  }

  handleSignin() : void {
    this.router.navigate(['signin'])
  }
}

