import {HttpClient,HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core'

@Injectable()
export class UserData{

    constructor(private httpClient: HttpClient){
    }

    CreateUser(userId,password){
        return new Promise((resolve,reject)=>{
            var result=this.httpClient.post('http://localhost:3000/CreateUser',{UserId:userId,Password:password})
            .subscribe((response:HttpResponse<any>)=>{
                resolve(response);
            });
        });        
    }

}