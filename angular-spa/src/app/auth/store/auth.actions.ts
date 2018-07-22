import { UserModel } from './../user.model';
import { Action } from '@ngrx/store';

export const TRY_SIGNIN='TRY_SIGNIN'
export const SET_TOKEN='SET_TOKEN'
export const SIGN_IN='SIGN_IN'
export const SIGN_UP='SIGN_UP'
export const LOG_OUT='LOG_OUT'
export const LOG_IN_FAILED='LOG_IN_FAILED'

export class TrySignIn implements Action{
    readonly type=TRY_SIGNIN;
    constructor(public payload:UserModel){}
}

export class SetToken implements Action{
    readonly type=SET_TOKEN;
    constructor(public payload:string){}
}

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

export class LogInFailed implements Action{
    readonly type=LOG_IN_FAILED;
}

export type AuthActions= SignIn |
                         SignUp |
                         LogOut |
                         TrySignIn |
                         SetToken |
                         LogInFailed;