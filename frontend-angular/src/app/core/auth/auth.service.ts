import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { User, UserDataToken } from '../interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAuthenticated: boolean = false;
  userDataToken: UserDataToken;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
    ) {}

  login(rut: string, password: string) {

    this.http
      .post<{token: string,user: User}>(API_URL + '/auth/login', { rut, password })
      .subscribe((response) => {
        localStorage.setItem('token', response.token)

        this.isAuthenticated = true;
        if(response.token){
          this.router.navigate(['/dashboard'])
        }
      },
      error => {
        console.log(error);
        this.toastr.error('Inicio de sesión ', 'Credenciales incorrectas');
      }
      );
  }

  saveUser(user: User){
    return this.http.post<{ message: string; user: User }>(
      API_URL + '/auth/register',
      user
    );
  }

  getSessions(){
    return this.http.get<any>(API_URL + '/auth/sessions');
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  autoAuthUser() {
    try {
      this.getAuthData();
      this.isAuthenticated = true;
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    if (!token) {
      throw Error('Token not found');
    }
  }

  logout() {
    localStorage.removeItem('token')
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  formatRut(rut: string){
    let rutWithoutSpaces = rut.trim();
    // Remove . and -
    const rutClean = rutWithoutSpaces.replace(/[\s\.\-]/g, "");
    // Remove verify digit
    const rutNumber = rutClean.slice(0, -1);
    // Verify digiy
    const digit = rutClean.slice(-1);
    return `${rutNumber}-${digit}`
  }

}
