import { HttpClient } from '@angular/common/http';
import { ErrorModel } from './../errors.model';
import { Action } from '@ngrx/store';

export const ADD_ERRORS='ADD_ERRORS';
export const REMOVE_ERRORS='REMOVE_ERRORS';
export const FETCH_ERRORS='FETCH_ERRORS';
export const TRY_FETCH_ERRORS='TRY_FETCH_ERRORS';
export const SET_ERRORS='SET_ERRORS';

export class AddErrors implements Action{
    readonly type=ADD_ERRORS;
    constructor(public payload:ErrorModel){}
}

export class RemoveErrors implements Action{
    readonly type=REMOVE_ERRORS;
    constructor(public payload:ErrorModel){}
}

export class SetErrors implements Action{
    readonly type=SET_ERRORS;
    constructor(public payload:ErrorModel[]){}
}

export class TryFetchErrors implements Action{
    readonly type=TRY_FETCH_ERRORS;
}

export class FetchErrors implements Action{
    readonly type=FETCH_ERRORS;
}

export type ErrorsActions=AddErrors |
                          RemoveErrors |
                          SetErrors |
                          FetchErrors |
                          TryFetchErrors;


