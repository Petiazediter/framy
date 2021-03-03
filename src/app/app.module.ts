import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {CookieModule} from 'ngx-cookie'
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/logincomponent/login/login/login.component';
import { RegisterComponent } from './components/logincomponent/register/register/register.component'
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
