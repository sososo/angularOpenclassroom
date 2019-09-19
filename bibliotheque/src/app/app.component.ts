import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
   const config = {
     apiKey: "AIzaSyD285T8KA7LaSTkdjYBQVBcP71bV39n0u8",
     authDomain: "coursangular-be3d4.firebaseapp.com",
     databaseURL: "https://coursangular-be3d4.firebaseio.com",
     projectId: "coursangular-be3d4",
     storageBucket: "coursangular-be3d4.appspot.com",
     messagingSenderId: "990852109416",
     appId: "1:990852109416:web:68a1604ebd5fcc198d17dd"
   };
   firebase.initializeApp(config);
 }
}
