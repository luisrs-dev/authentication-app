import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      rut: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl(null, {
        validators: [
          Validators.email,
          Validators.required,
          Validators.minLength(3),
        ],
      }),
      password: new FormControl(null, {
        validators: [
          Validators.minLength(3),
          Validators.required
        ],
      }),
    });
  }

  onRegister() {
    if (this.form.invalid) return;
    const user = {
      name: this.form.value.name,
      rut: this.authService.formatRut(this.form.value.rut),
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.authService.saveUser(user).subscribe(
      (response) => {
        console.log(response);
        this.toastr.success('Te has registrado con éxito')
        this.router.navigate(["/registered"]);
      },
      (error) => {
        console.log(error);
      }
    );


  }

}
