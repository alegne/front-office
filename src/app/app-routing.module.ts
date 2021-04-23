import { ContactComponent } from './components/contact/contact.component';
import { ActualityComponent } from './components/details/news-all/actuality/actuality.component';
import { NewsAllComponent } from './components/details/news-all/news-all.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'annonces',
    component: NewsAllComponent
  },
  {
    path: 'evenements/:type',
    component: ActualityComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
