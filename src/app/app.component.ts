import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {AppState} from "./store/app.reducer";
import {Store} from "@ngrx/store";
import {AuthenticateSuccess, Logout} from "./auth/store/auth.actions";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'expenses';
  user: any;

  constructor( private store: Store<AppState>, private afAuth: AngularFireAuth){}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      console.log('onAuthChanged', user);
      if (user) {
        this.store.dispatch(new AuthenticateSuccess(user));
      } else {
        this.store.dispatch(new Logout());
      }
      this.user = user
    });
  }

}
