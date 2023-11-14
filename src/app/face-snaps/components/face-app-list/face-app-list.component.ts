import { Component,OnDestroy,OnInit } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import {  takeUntil, tap } from 'rxjs/operators';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
@Component({
  selector: 'app-face-app-list',
  templateUrl: './face-app-list.component.html',
  styleUrls: ['./face-app-list.component.scss']
})
export class FaceAppListComponent implements OnInit, OnDestroy{

  faceSnaps$! : Observable<FaceSnap[]> ;
  private destroy$! : Subject<boolean>;

  constructor(private faceSnapsService : FaceSnapsService ){}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
    }
  // SUBJECT : CREATE AN OBJECT AND EMIT IT ON DEMAND
  ngOnDestroy(): void {
  this.destroy$.next(true)
}
  
  }