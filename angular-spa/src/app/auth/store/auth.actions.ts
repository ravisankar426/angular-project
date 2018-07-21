import { UserModel } from './../user.model';
import { Action } from '@ngrx/store';

export const SIGN_IN='SIGN_IN'
export const SIGN_UP='SIGN_UP'
export const LOG_OUT='LOG_OUT'

export class SignIn implements Action{
    readonly type=SIGN_IN;
    constructor(public payload:UserModel){}
}

export class SignUp implements Action{
    readonly type=SIGN_UP;
    constructor(public payload:UserModel){}
}

export class LogOut implements Action{
    readonly type=LOG_OUT;
}

export type AuthActions= SignIn |
                         SignUp |
                         LogOut;