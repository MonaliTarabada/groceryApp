import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './login/home/home.component';
import { AuthguardGuard } from './login/guard/authguard.guard';
import { GrlistComponent } from './login/grlist/grlist.component';

const routes: Routes = [
  {path: '', 
   component: LoginComponent},
  {path:'register',
   component: RegisterComponent},
  {path: 'home/:user',
   component: HomeComponent,
   canActivate: [AuthguardGuard]},
  {path:'grlist/:listname',
   component: GrlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
