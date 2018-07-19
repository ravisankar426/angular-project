import * as ErrorsActions from './errors.actions';
import { ErrorModel } from './../errors.model';

const initialState={
    errors:[
        new ErrorModel("1","Test"),
        new ErrorModel("2","Test2"),
    ]};

export function errorsReducer(state=initialState,action:ErrorsActions.ErrorsActions){
    switch(action.type)
    {
        case ErrorsActions.ADD_ERRORS:
            return{
                ...state,
                errors:[...state.errors,action.payload]
            };
        default:return initialState;
    }
}