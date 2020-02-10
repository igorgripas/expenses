import {Injectable} from "@angular/core";
import * as firebaseui from "firebaseui";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Injectable({providedIn: "root"})
export class LoginService {
  ui: firebaseui.auth.AuthUI;
  uiConfig: firebaseui.auth.Config;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
      }
    }
    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
  }

  onLoginSuccessful() {
    this.router.navigate(['home']);
  }

  public startLogin() {
    this.ui.start('#firebaseui-auth-container', this.uiConfig);
  }
}
