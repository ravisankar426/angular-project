import * as fromErrors from '../errors/store/errors.reducer'
import * as fromAuth from '../auth/store/auth.reducers'
import {ActionReducerMap} from '@ngrx/store'

export interface AppState{
    errors: fromErrors.State,
    auth: fromAuth.State
}

export const reducers:ActionReducerMap<AppState>={
    errors:fromErrors.errorsReducer,
    auth:fromAuth.authReducer
}