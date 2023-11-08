import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceAppListComponent } from './face-app-list/face-app-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {SingleFaceSnapComponent} from './single-face-snap/single-face-snap.component'
const routes: Routes = [
  {path:'facesnaps', component:FaceAppListComponent},
  {path:'', component:LandingPageComponent},
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
