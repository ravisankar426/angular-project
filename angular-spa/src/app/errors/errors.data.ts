import { ErrorModel } from './errors.model';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ErrorData{
    constructor(private httpClient: HttpClient){
        
    }

    GetErrors(){        
        return this.httpClient.get('http://localhost:4000/errors'); 
    }

}