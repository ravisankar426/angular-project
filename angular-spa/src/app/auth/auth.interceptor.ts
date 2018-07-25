import { AppState } from './../store/app.reducers';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http'
import { tap, map, switchMap,take } from 'rxjs/operators';
import * as fromAuth from './store/auth.reducers'


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private appState:Store<AppState>){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{             
        return this.appState.select('auth')
        .pipe(take(1))
        .pipe(switchMap((authState:fromAuth.State)=>{
            if(!authState.token)
                return next.handle(req);
            const newHeaders=req.headers.append('x-auth',authState.token);
            const clonedReq=req.clone({headers:newHeaders}); 
            return next.handle(clonedReq);
        }));
    }
}