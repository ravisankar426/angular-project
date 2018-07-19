import {Action} from '@ngrx/store'
import {UserModel} from './user.model'

const initialState=new UserModel();

export function authReducer(state=initialState, action:Action){

}