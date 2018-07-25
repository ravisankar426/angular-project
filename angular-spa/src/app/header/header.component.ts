
import { SignIn } from './../auth/store/auth.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuth from './../auth/store/auth.reducers';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as AuthActions from '../auth/store/auth.actions'
import * as fromApp from '../store/app.reducers'
import * as ErrorsActions from './../errors/store/errors.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  WebsiteName:string;

  authState:Observable<fromAuth.State>;
  constructor(private appState:Store<fromApp.AppState>,
              private router:Router) { }

  ngOnInit() {
    this.authState=this.appState.select('auth');
    this.WebsiteName="Project";
  }

  Logout(){
    this.appState.dispatch(new AuthActions.LogOut());
  }

  GetErrors(){
    this.appState.dispatch(new ErrorsActions.FetchErrors());
  }

}
