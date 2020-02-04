import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {map, take} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<AppState>, private afAuth: AngularFireAuth){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.authState.pipe(
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
