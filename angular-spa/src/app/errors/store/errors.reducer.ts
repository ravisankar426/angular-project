import * as ErrorsActions from './errors.actions';
import { ErrorModel } from './../errors.model';

export interface State{
    errors:ErrorModel[];
}

const initialState:State={
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
        case ErrorsActions.REMOVE_ERRORS:
            var indexToRemove=state.errors.lastIndexOf(action.payload);
            return{
                ...state,
                errors:[...state.errors.slice(0,indexToRemove),...state.errors.slice(indexToRemove+1,(state.errors.length-indexToRemove-1))]
            }
        default:return initialState;
    }
}