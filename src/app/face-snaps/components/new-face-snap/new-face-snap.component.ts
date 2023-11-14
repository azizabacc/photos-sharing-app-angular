import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent  implements OnInit{
  
  snapForm! : FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlReg!:RegExp; 

  constructor(private formBuilder : FormBuilder, private faceSnapsService :FaceSnapsService, private router : Router){}

ngOnInit(): void {
  this.urlReg =  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
  this.snapForm = this.formBuilder.group({
    title : [null, Validators.required],
    description : [null, Validators.required],
    imageUrl : [null, [Validators.required, Validators.pattern(this.urlReg)]],
    location : [null]
  },{updateOn : 'blur'})/* the form is updated only when we change from input field (to avoid the errors that appear when we are typing the image url)  */
  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map(formValue =>({
      ...formValue,
      createdDate : new Date(),
      snaps : 0,
      id : 10
    }))
  )
}
onSubmitForm() {
  this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
    /*   tap(() => this.router.navigate(['/','facesnaps'])) */
  ).subscribe();
}

}
