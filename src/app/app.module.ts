import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {CookieModule} from 'ngx-cookie'
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/logincomponent/login/login/login.component';
import { RegisterComponent } from './components/logincomponent/register/register/register.component'
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { MyProjectsComponent } from './components/sidebar/my-projects/my-projects.component'
import { MyInterceptor } from './interceptors/http.interceptor';
import { PageHeaderComponent } from './components/sidebar/page-header/page-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    MyProjectsComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot(),
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: MyInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
