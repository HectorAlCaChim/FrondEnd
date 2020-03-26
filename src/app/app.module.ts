import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // PARA PERMITIR LAS PETICIONES http
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { BaseUrlInterceptor } from './Interceptor/base-url.interceptors';
import { BasicAuthInterceptor } from './Interceptor/beare.interceptors';
import { environment } from 'src/environments/environment';
import { CacheService } from './auth/cache.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe'; // importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // aqui se importa la libreria con los modulos
    HttpClientModule, // se agrega la imortacion HTTP CLIENTs
    ReactiveFormsModule,
    SharedModule, // modulo de buscador pot libreria
    Ng2SearchPipeModule, // PIPE ya implementado por la libreria
    OrderModule, // add here
    NgxPaginationModule, // <-- import the module
    NgbModule
  ],
  providers: [AuthService, AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: 'BASE_API_URL', useValue: environment.urlApi}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
