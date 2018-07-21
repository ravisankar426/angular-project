import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from './../auth/store/auth.actions';
import { Component, OnInit } from '@angular/core';
import {UserModel} from '../auth/user.model';
import * as fromAuth from '../auth/store/auth.reducers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: UserModel;

  constructor(private authStore:Store<fromAuth.State>,
              private router:Router){  
    this.user=new UserModel();  
  } 
  


  ngOnInit() { 
  }

  SignIn(){
    this.authStore.dispatch(new AuthActions.SignIn(this.user));
    this.router.navigate(['home']);
    // this.authService.SignIn(this.user.UserId,this.user.Password)
    // .then((result)=>{
    //     console.log(result);
    // })
    // .catch((e)=>{
    //   console.log(e);
    // });
  }

}
