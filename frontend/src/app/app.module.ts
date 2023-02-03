import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Agregado
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Agregado Routing
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//import { EventosModule } from './eventos/eventos.module';
//import { LoginModule } from './login/login.module';
import { EventosComponent} from './eventos/eventos.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    // Agregado
    HttpClientModule,
    AppRoutingModule,
    //EventosModule,
    //LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Agregado
//import { CancionesModule } from './canciones/canciones.module';
import { HttpClientModule } from '@angular/common/http'
import { EventosModule } from './eventos/eventos.module';


// Agregado Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
//import { RegistryComponent } from './registry/registry.component';
//import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { LoginComponent } from './login/login.component';
//import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    // Agregado
    //CancionesModule,
    EventosModule,
    HttpClientModule,
    //Agragado Routing
    RouterModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
