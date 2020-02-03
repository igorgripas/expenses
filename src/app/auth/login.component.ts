import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ui: firebaseui.auth.AuthUI;

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      console.log('onAuthChanged', user);
    });

    const uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
      }
    }
    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  private onLoginSuccessful() {
    console.log('onLoginSuccessfull', arguments);
  }

}
