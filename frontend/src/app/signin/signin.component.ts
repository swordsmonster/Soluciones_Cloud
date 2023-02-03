import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Signin } from './signin';
import { Signinresponse } from './signinresponse';
import { ServicioAPIService } from '../Servicios/ServicioAPI.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  signinresponse: Signinresponse;

  email = ""
  contrasena = ""

  signinCompleted = false
  message = "Registro completado!"

  constructor(
    private servicioAPIService: ServicioAPIService,
    private router: Router
    ) { }

  ngOnInit() {
    //
  }

  handleSignin() : void {

    //this.LoginService.postLogin(this.email, this.password).subscribe(cs => {this.loginresponse = cs;});
    this.servicioAPIService.postSignin(this.email, this.contrasena).subscribe(cs => {this.signinresponse = cs;
    console.log(this.signinresponse.mensaje)

    if(this.signinresponse.mensaje === "usuario creado exitosamente") {
      // Redirect to Welcome Page
      this.router.navigate(['login'])
      this.signinCompleted = false

    } else {
      this.signinCompleted = true
    }

    console.log(this.signinCompleted)
    });

  }

  handleCancel() : void {
    this.router.navigate(['login'])
  }
}

