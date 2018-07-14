import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Dashboard Module
import { DashboardModule } from './dashboard/dashboard.module';

// Login Component
import { LoginComponent } from './login/login/login.component';

// Routes
import { APP_ROUTES } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    APP_ROUTES
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
