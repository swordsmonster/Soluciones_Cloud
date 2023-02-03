
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ErrorComponent } from './error/error.component';
import { EventosComponent } from './eventos/eventos.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
//import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'eventos/:id', component: EventosComponent },
  //{ path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

