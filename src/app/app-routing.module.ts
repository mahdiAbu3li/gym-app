import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPlayerComponent } from './dashboard/add-player/add-player.component'
import { ShowPlayerComponent } from './dashboard/show-player/show-player.component';
const routes :Routes = [
  { path : "login" , component:LoginPageComponent },
  { path : "dashboard" , component:DashboardComponent },
  { path:"showPlayer" , component:ShowPlayerComponent},
  { path:"addPlayer" , component:AddPlayerComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})

export class AppRoutingModule { } 
