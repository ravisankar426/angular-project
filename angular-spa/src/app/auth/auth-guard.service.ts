import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
import {Store} from '@ngrx/store'
import {AppState} from '../store/app.reducers'
import {map} from 'rxjs/operators'


@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private appState:Store<AppState>){
    }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
        return this.appState.select('auth')
        .pipe(map((authState)=>{
            return (authState.token!=null)
        }))
    }
}