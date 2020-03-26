import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IAuthStatus } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  protected currentAuthStatus: IAuthStatus;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = (this.authService.getAuthStatus()))
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermisions(next);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermisions(childRoute);
  }
  canLoad( route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  protected checkLogin() {
    if ((this.authService.getToken() == null || this.authService.getToken() === '')) {
      alert('se debe autentificar antes de continuar');
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
  protected checkPermisions(route?: ActivatedRouteSnapshot) {
    let roleMatch = true;
    if (route) {
      const expectedRole = route.data.expectedRole;
      if (expectedRole) {
        roleMatch = this.currentAuthStatus.role === expectedRole;
      }
    }
    if (!roleMatch) {
      alert(' no tienes permisos para acceder ');
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }
}
