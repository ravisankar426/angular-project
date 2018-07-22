import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as AuthActions from './auth.actions';
import { Injectable } from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {map,switchMap} from 'rxjs/operators';
import {UserModel} from '../user.model';
import {from,Observable} from 'rxjs';
import * as Config from '../../config'

@Injectable()
export class AuthEffects{

    @Effect()
    authSignIn=this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .pipe(map((action:AuthActions.TrySignIn)=>{
        return action.payload;
    }))
    .pipe(switchMap((authData:UserModel)=>{
        return from(this.httpClient.post(`${Config.authBaseUri}SignIn`,{
            UserId:authData.UserId,Password:authData.Password
        }))
    }))
    .pipe(map((response)=>{
        if(response==null){
            this.router.navigate(['signin']);
            return{
                type:AuthActions.LOG_IN_FAILED
            }
        }else{
            this.router.navigate(['home']);
            return{
                type:AuthActions.SIGN_IN,
                payload:response            
            }
        }
    }));

    constructor(private actions$:Actions,
                private httpClient:HttpClient,
                private router:Router){        
    }
}