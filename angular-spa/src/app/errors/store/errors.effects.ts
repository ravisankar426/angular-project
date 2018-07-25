
import { Actions, Effect } from '@ngrx/effects';
import { ErrorModel } from './../errors.model';
import { Router } from '@angular/router';
import { switchMap,map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as ErrorsActions from './errors.actions';
import {from} from 'rxjs'
import * as Config from '../../config'


@Injectable()
export class ErrorsEffects{

    @Effect()
    fetchErrors=this.actions$
    .ofType(ErrorsActions.FETCH_ERRORS)
    .pipe(map((action:ErrorsActions.FetchErrors)=>{
        console.log('fired');
        return "";
    }))
    .pipe(switchMap((response:string)=>{
        return from(this.httpClient.get(`${Config.errorsBaseUri}errors`))
    }))
    .pipe(map((response:HttpResponse<any>)=>{
        return{
            type:ErrorsActions.SET_ERRORS,
            payload:response,
        }
    }));

    constructor(private actions$:Actions,
                private httpClient:HttpClient,
                private router:Router){

    }

}