import { ErrorData } from './errors.data';
import { ErrorModel } from './errors.model';
import {Injectable} from '@angular/core'

@Injectable()
export class ErrorService{
    errors: ErrorModel[];
    constructor(private errorData:ErrorData){
        this.errors=[];
    }
    GetErrors(){
        return this.errorData.GetErrors()
        .subscribe((data)=>{
            return data['errors'];
        });     
    }
}