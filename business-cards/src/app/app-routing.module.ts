import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BusinessCardsComponent} from './business-cards/business-cards.component';
import {AuthGuardGuard} from './auth-guard.guard';
import {UserInforComponent} from './user-infor/user-infor.component';
import {RegisterComponent} from './register/register.component';
import {SearchCardComponent} from './search-card/search-card.component';

const routes: Routes = [

  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'business-cards', component:BusinessCardsComponent, canActivate:[AuthGuardGuard] },
  {path: 'user', component:UserInforComponent, canActivate:[AuthGuardGuard]},
  {path: 'search', component:SearchCardComponent, canActivate:[AuthGuardGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
