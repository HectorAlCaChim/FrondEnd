import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService)  {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.authService.getToken();
    console.log(jwt);
    // this.datoUsuario = JSON.parse(localStorage.getItem('user'));

    let request = req;
    if (jwt) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ jwt }`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 402) {

          this.router.navigateByUrl('/landing-page');
        }
        return throwError(err);
      }));
  }
}
