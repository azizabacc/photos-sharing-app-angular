import { Component } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
 faceSnap! :FaceSnap;

 faceSnap$! :Observable<FaceSnap> ;

  constructor(private faceSnapsService : FaceSnapsService, private route:ActivatedRoute){}
  ngOnInit() {
    // type of params : string / the + transforms the string of numbers into interger
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
 
    

  }

  AddSnaps(id:number){
    this.faceSnap$ = this.faceSnapsService.SnapByFaceSnapId(id, 'plus').pipe()


  }
  RemoveSnaps(id:number){
    this.faceSnap$ = this.faceSnapsService.SnapByFaceSnapId(id, 'minus').pipe()
}

}
