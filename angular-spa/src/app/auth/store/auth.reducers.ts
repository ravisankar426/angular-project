import * as AuthActions from './auth.actions';
import {Action} from '@ngrx/store'

export interface State{
    token:string;
    authenticated:boolean;
    authStatus:number;
}

const initialState:State={
    token:null,
    authenticated:false,
    authStatus:0,//0-not signed ; 1- Logged In ; 2- Login Failed
};

export function authReducer(state=initialState, action:AuthActions.AuthActions){
    switch(action.type){
        case AuthActions.SIGN_IN:
            return{
                ...state,
                token:action.payload.Token,
                authenticated:true,
                authStatus:1
            }
        case AuthActions.SIGN_UP:
            return{
                ...state,
                token:action.payload.Token,
                authenticated:true
            }
        case AuthActions.LOG_OUT:
            return{
                ...state,
                token:null,
                authenticated:false,
            }
        case AuthActions.SET_TOKEN:
            return{
                ...state,
                token:action.payload,
                authenticated:true
            }
        case AuthActions.LOG_IN_FAILED:
            return{
                ...state,
                token:null,
                authenticated:false,
                authStatus:2
            }
        default : return state;
    }
}