import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DashBoardPage } from '../pages/dashBoard/dashBoard';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'dashboard', component: DashBoardPage },
]
 
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    RegisterPage,
    DashBoardPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
