import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { ActivatedRouteSnapshot, CanActivate , CanActivateChild, CanLoad,  RouterStateSnapshot, UrlTree, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.checkAuthAtate(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.canActivate(route, state);
    }
     canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
       const url = segments.map(s => `/${s}` ).join('');
       return this.checkAuthAtate(url).pipe(take(1));
    }


  private  checkAuthAtate(redirect: string ): Observable<boolean> {
 return this.authService.isAuthenticated.pipe(
  tap(is => {
    if (!is) {
      this.router.navigate(['/login'], {
        queryParams: {redirect}
      });
    }
  })
 );
  }
}
