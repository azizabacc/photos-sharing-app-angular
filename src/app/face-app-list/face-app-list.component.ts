import { Component,OnInit } from '@angular/core';
import {FaceSnap} from '../models/face-snap.model'
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-app-list',
  templateUrl: './face-app-list.component.html',
  styleUrls: ['./face-app-list.component.scss']
})
export class FaceAppListComponent implements OnInit{

  faceSnaps! : FaceSnap[]

  constructor(private faceSnapsService : FaceSnapsService ){}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps()
    }
    
  }