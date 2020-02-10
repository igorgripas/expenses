import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {filter, map, take} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthSelectorService} from "./store/authSelector.service";

@Injectable({providedIn: "root"})
export class NotAuthGuard implements CanActivate {

  constructor(private router: Router, private authSelectorService: AuthSelectorService){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSelectorService.getUserObserver().pipe(
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return this.router.createUrlTree(['/home']);
        }
        return true;
      })
    );
  }
}
