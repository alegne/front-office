import { ClubsComponent } from './components/clubs/clubs.component';
import { AboutComponent } from './components/about/about.component';
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
    path: 'evenements/:type/:titre/:date/:posteur',
    component: ActualityComponent
  },
  {
    path: 'evenements/:titre/:date/:posteur',
    component: ActualityComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },
  {
    path : 'Apropos',
    component: AboutComponent
  },
  {
    path : 'clubs',
    component: ClubsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
