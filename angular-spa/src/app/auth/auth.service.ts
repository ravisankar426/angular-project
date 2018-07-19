import {UserData} from '../auth/user.data'
import {Injectable} from '@angular/core'
import {HttpResponse} from '@angular/common/http'

@Injectable()
export class AuthService{
    selectedUser: string;

    constructor(private userData:UserData){  
    }

    ngOnit(){        
    }

    SignIn(userId:string,password:string){
        return Promise.resolve(`User ${userId} Logged In with the password: ${password}`);
    }

    CreateUser(userId:string,password:string){
        return this.userData.CreateUser(userId,password)
        .then((response: HttpResponse<any>)=>{
            console.log(response);
            if(response.status===200){
                return 'User Created Successfully.'
            }
            else{
                return 'There is an error while creating the user'
            }
        })
        .catch((e)=>{
            console.log(e);
        })
    }

}