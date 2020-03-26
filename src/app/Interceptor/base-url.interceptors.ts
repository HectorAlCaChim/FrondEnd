import { Injectable, Inject } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { PRIMARY_OUTLET } from '@angular/router';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    // contructor
    constructor(@Inject('BASE_API_URL') private baseUrl: string, ) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            url: `${this.baseUrl}/${req.url}`,
        });
        return next.handle(req);
    }
}
