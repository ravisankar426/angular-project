import * as AuthActions from './../auth/store/auth.actions';
import { AppState } from './../store/app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {UserModel} from '../auth/user.model';
import {ErrorService} from '../errors/errors.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UserModel;

  constructor(private appState:Store<AppState>){  
    this.user=new UserModel();  
  } 
  
  ngOnInit() {    
  }

  CreateUser(){
    this.appState.dispatch(new AuthActions.TrySignUp(this.user));
    // this.authService.CreateUser(this.user.UserId,this.user.Password)
    // .then((user)=>{
    //   console.log(user);
    // });
  }

}
