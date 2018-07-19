import { Component, OnInit } from '@angular/core';
import {UserModel} from '../auth/user.model';
import {AuthService} from '../auth/auth.service';
import {ErrorService} from '../errors/errors.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UserModel;

  constructor(private authService:AuthService,private errorService:ErrorService){  
    this.user=new UserModel();  
  } 
  
  ngOnInit() {    
  }

  CreateUser(){
    this.authService.CreateUser(this.user.UserId,this.user.Password)
    .then((user)=>{
      console.log(user);
    });
  }

}
