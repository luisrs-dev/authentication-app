import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(
    public authService: AuthService
  ) {}

  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      rut: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(7),
          // this.validateRut,
        ],
      }),
      password: new FormControl(null, {
        validators: [Validators.minLength(3)],
      }),
    });
  }

  onLogin(){
    if (this.form.invalid) return;
    const rutFormated = this.authService.formatRut(this.form.value.rut);
    this.authService.login(rutFormated, this.form.value.password);
  }

  verifiyRegisteredRut(){
    console.log('verifiyRegisteredRut');

  }

}
