import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, MarkerService } from './_services/index';
import { HomeComponent } from './home/index';
import { MainComponent } from './main/index';
import { AboutComponent } from './about/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AlertService,
    AuthGuard,
    AuthenticationService,
    MarkerService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
