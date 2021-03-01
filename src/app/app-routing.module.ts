import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/logincomponent/login/login/login.component';

const routes: Routes = [
  //{ path: 'first-component', component: FirstComponent },
  {path : '', component : HomeComponent},
  {path :'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
