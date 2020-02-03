import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'expenses';
  user: any;

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user => {
      console.log('>>>>>>>>>>> onAuthStateChanged' + user);
      this.user = user
    });
  }

}
