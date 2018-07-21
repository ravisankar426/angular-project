import * as AuthActions from './auth.actions';
import {Action} from '@ngrx/store'

export interface State{
    token:string;
    authenticated:boolean;
}

const initialState:State={
    token:null,
    authenticated:false,
};

export function authReducer(state=initialState, action:AuthActions.AuthActions){
    switch(action.type){
        case AuthActions.SIGN_IN:
        case AuthActions.SIGN_UP:
            return{
                ...state,
                authenticated:true
            }
        case AuthActions.LOG_OUT:
            return{
                ...state,
                token:null,
                authenticated:false
            }
        default : return state;
    }
}