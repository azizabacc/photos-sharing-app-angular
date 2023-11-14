import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceAppListComponent } from './components/face-app-list/face-app-list.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapsRoutinModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceAppListComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  exports : [
    FaceAppListComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutinModule
  ]
})
export class FaceSnapsModule { }
