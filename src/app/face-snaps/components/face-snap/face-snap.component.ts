import { Component, OnInit ,Input} from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap! :FaceSnap;
  constructor(private faceSnapsService : FaceSnapsService , private router:Router){}
  ngOnInit() {

 
    

  }

  AddSnaps(){
      this.faceSnapsService.SnapByFaceSnapId(this.faceSnap.id, 'plus')
  }
  RemoveSnaps(){
    this.faceSnapsService.SnapByFaceSnapId(this.faceSnap.id, 'minus')
}
  viewCard(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)

}
}
