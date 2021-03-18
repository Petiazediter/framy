import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/logincomponent/login/login/login.component';
import { RegisterComponent } from './components/logincomponent/register/register/register.component';
import { NewProjectPageComponent } from './components/sidebar/new-project-page/new-project-page.component';

const routes: Routes = [
  //{ path: 'first-component', component: FirstComponent },
  {path : '', component : HomeComponent},
  {path :'login', component : LoginComponent},
  {path :'register', component : RegisterComponent},
  {path: 'projectcreator', component : NewProjectPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
