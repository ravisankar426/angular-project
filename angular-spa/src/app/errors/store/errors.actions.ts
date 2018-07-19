import { ErrorModel } from './../errors.model';
import { Action } from '@ngrx/store';

export const ADD_ERRORS='ADD_ERRORS';
export const REMOVE_ERRORS='REMOVE_ERRORS';

export class AddErrors implements Action{
    readonly type=ADD_ERRORS;
    constructor(public payload:ErrorModel){}
}

export class RemoveErrors implements Action{
    readonly type=REMOVE_ERRORS;
    constructor(public payload:ErrorModel){}
}

export type ErrorsActions=AddErrors |
                          RemoveErrors;


