import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/utils/angular-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RouterModule } from '@angular/router';
import { FormatRutDirective } from 'src/app/shared/directives/trim-input.directive';

@NgModule({

  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule

  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    FormatRutDirective
  ]
})
export class AuthModule { }
