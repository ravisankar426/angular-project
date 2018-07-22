import { appBaseUri } from './../config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from './../auth/store/auth.actions';
import { Component, OnInit } from '@angular/core';
import {UserModel} from '../auth/user.model';
import * as fromAuth from '../auth/store/auth.reducers';
import {AppState} from '../store/app.reducers'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: UserModel;
  authState:Observable<fromAuth.State>

  constructor(private appState:Store<AppState>,
              private router:Router){  
    this.user=new UserModel();  
  }    

  ngOnInit() {
    this.appState.select('auth')
    .subscribe((response)=>{
    });
    this.authState=this.appState.select('auth'); 
  }

  SignIn(){
    this.appState.dispatch(new AuthActions.TrySignIn(this.user));
  }

}
