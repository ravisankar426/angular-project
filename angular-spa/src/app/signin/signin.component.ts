import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ErrorService} from '../errors/errors.service';
import {UserModel} from '../auth/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: UserModel;

  constructor(private authService:AuthService,private errorService:ErrorService){  
    this.user=new UserModel();  
  } 
  
  ngOnInit() {    
  }

  SignIn(){
    this.authService.SignIn(this.user.UserId,this.user.Password)
    .then((result)=>{
        console.log(result);
    })
    .catch((e)=>{
      console.log(e);
    });
  }

}
