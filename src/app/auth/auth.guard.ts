import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {AuthSelectorService} from "./store/authSelector.service";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authSelectorService: AuthSelectorService){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSelectorService.getUserObserver().pipe(
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
