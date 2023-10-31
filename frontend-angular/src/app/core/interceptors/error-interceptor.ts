import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
// import { DialogService } from "src/app/shared/services/dialog.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(
      // private dialogService: DialogService,
      private router: Router,
      private toastr: ToastrService

      ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler){

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError( () => error);
              })
        );
    }
  }
