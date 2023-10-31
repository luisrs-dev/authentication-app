import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    token: string;

    constructor(
        private cookieService: CookieService,
        private authService: AuthService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

      const token = localStorage.getItem('token');
      if(token){
        const authRequest = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token),
        });
        return next.handle(authRequest);
      }
      return next.handle(req);
    }
}
