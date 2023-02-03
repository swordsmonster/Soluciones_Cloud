import { Component, OnInit } from '@angular/core';
import { Signin } from './signin';
import { SigninService } from './signin.service';
import { Signinresponse } from './signinresponse';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  public signin: Signin;
  signinresponse: Signinresponse;
  signinCompleted = false
  message = "Registro completado!"

  constructor(private signinService: SigninService) { }

  ngOnInit() {
    this.signin = {
      email: '',
      contrasena: ''
    }

  }

  handleSignin() : void {

    //this.LoginService.postLogin(this.email, this.password).subscribe(cs => {this.loginresponse = cs;});
    this.signinService.postSignin(this.signin.email, this.signin.contrasena).subscribe(cs => {this.signinresponse = cs;});
    console.log(this.signinresponse.mensaje)

    // this.eventosService.getEventos('').subscribe(cs => {this.eventos = cs;})
    if(this.signinresponse.mensaje === "usuario creado exitosamente") {
      // Redirect to Welcome Page
      //this.router.navigate(['eventos', this.login.email])
      this.signinCompleted = false

    } else {
      this.signinCompleted = true
    }

    console.log(this.signinCompleted)
  }
}

