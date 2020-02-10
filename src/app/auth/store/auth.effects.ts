import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
  @Effect({dispatch: false})
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT_START),
    switchMap(this.onLogoutStart.bind(this))
  );

  constructor(private actions$: Actions, private afAuth: AngularFireAuth, private router: Router) {}

  private onLogoutStart() {
    return this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/login']));
  }

}
