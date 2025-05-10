import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { RegisterComponent } from './common/register/register.component';
import { CreatePostComponent } from './common/create-post/create-post.component';
import { LoginComponent } from './common/login/login.component';
import { DashboardComponent } from './common/dashboard/dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page',
      },
    
      {
        path: 'login', component: LoginComponent,
        title: 'Login Page',
      },
    
      {
        path: 'register', component: RegisterComponent,
        title: 'Registration Page',
      },

      {
        path: 'create-post', component: CreatePostComponent,
        title: 'Create Post',
      },

      {
        path: 'dashboard', component: DashboardComponent,
        title: 'Dashboard',
      },


      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./common/home/home.component').then(
            (m) => m.HomeComponent
          );
        },
        title: 'Home Page',
      },
];
