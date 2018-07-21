import { AuthActions } from './auth/store/auth.actions';
import { ErrorsActions } from './errors/store/errors.actions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Router,RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store'

import { AppComponent } from './app.component';
import {AuthService} from './auth/auth.service'
import {ErrorService} from './errors/errors.service'
import {ErrorData} from './errors/errors.data'
import {UserData} from './auth/user.data'
import {ErrorsComponent} from './errors/errors.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {errorsReducer} from './errors/store/errors.reducer';
import {authReducer} from './auth/store/auth.reducers';
import { HomeComponent } from './home/home.component'
import {reducers} from './store/app.reducers'

const appRoutes=[
  {path:'home',component:HomeComponent},
  {path:'errors',component:ErrorsComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'/signin',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService,ErrorService,ErrorData,UserData],
  bootstrap: [AppComponent]
})
export class AppModule { }
