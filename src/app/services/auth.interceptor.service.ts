import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
//import { AuthenticationService } from './auth.service';

import { Observable, from, throwError } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import { Storage } from '@ionic/storage';
import { UserLoggedIn } from './interface.services';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private storage: Storage) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const re = 'maps.googleapis';
      
      if(request.url.includes(re)){
        return next.handle(request);
      }else{
        return <any>from(this.storage.get('USER_INFO')).pipe(
          switchMap((user:UserLoggedIn) => {
            let token = '';
            if (user && user['token']) {
                token = user['token'];
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
            return next.handle(request);
          })
        );
      }
    }
  
  }