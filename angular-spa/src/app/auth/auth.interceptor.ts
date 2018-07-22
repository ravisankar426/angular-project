import { Observable } from 'rxjs';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http'
import {tap} from 'rxjs/operators';


export class AuthInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        const newHeaders=req.headers.append('x-auth','true')
        const clonedReq=req.clone({headers:newHeaders});  
        return next.handle(clonedReq);
    }
}