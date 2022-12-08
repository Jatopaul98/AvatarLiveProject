import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'nav', component:NavComponent},
  {
    path: 'nav',
    component: NavComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'movies', // child route path
        component: MoviesComponent, // child route component that the router renders
      },
    ],
  },


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
