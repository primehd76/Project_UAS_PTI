import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { AddkantinComponent } from './addkantin/addkantin.component';
import { EditkantinComponent } from './editkantin/editkantin.component';
import { ShowfavoriteComponent } from './showfavorite/showfavorite.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: UserListComponent,
  },
  {
    path: 'menu/:kode',
    component: UserDetailComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'editprofile',
    component: EditprofileComponent,
  },
  {
    path: 'showprofile',
    component: ShowprofileComponent,
  },
  {
    path: 'addkantin',
    component: AddkantinComponent,
  },
  {
    path: 'editkantin',
    component: EditkantinComponent
  },
  { 
    path: 'showfavorite',
    component: ShowfavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
