import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { TrendingNewestComponent } from './home/trending-newest/trending-newest.component';
const routes: Routes = [
  { path: '', component: TrendingNewestComponent },
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
