import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
 faceSnap! :FaceSnap;
  constructor(private faceSnapsService : FaceSnapsService, private route:ActivatedRoute){}
  ngOnInit() {
    // type of params : string / the + transforms the string of numbers into interger
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
 
    

  }

  AddSnaps(){
      this.faceSnapsService.SnapByFaceSnapId(this.faceSnap.id, 'plus')
  }
  RemoveSnaps(){
    this.faceSnapsService.SnapByFaceSnapId(this.faceSnap.id, 'minus')
}

}
