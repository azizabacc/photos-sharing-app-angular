import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { Observable, map, switchMap, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn :'root'
})

export class FaceSnapsService{
    
  constructor(private http:HttpClient){}
    faceSnaps$! : Observable<FaceSnap[]>
    faceSnap$! : Observable<FaceSnap>

    getAllFaceSnaps(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps').pipe(
            catchError(error => {
              console.error('Error fetching face snaps:', error);
              throw error;
            })
          );;
    }


    getFaceSnapById(id:number): Observable<FaceSnap>{
   
       return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id.toString()}`)
    }
    SnapByFaceSnapId(faceSnapId: number, snapType: 'plus' | 'minus'): Observable<FaceSnap> {
      return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
              ...faceSnap,
              snaps: faceSnap.snaps + (snapType === 'plus' ? 1 : -1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
         
              `http://localhost:3000/facesnaps/${faceSnapId}`,
              updatedFaceSnap)
              
          ),
          tap(updatedFaceSnap => console.log('Updated FaceSnap:', updatedFaceSnap))

      );
  }
     addFaceSnap(formValue:{title : string, description : string, imageUrl : string, location?: string}):Observable<FaceSnap>{
        return this.getAllFaceSnaps().pipe(
            map(facesnaps=>[...facesnaps.sort((a,b)=>a.id-b.id)]),
            map(sortedFacesnaps=>sortedFacesnaps[sortedFacesnaps.length-1]),
            map(previousFacesnap =>({
                ...formValue,
                snaps:0,
                createdDate:new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFacesnap => this.http.post<FaceSnap>(
                'http://localhost:3000/facesnaps', 
                newFacesnap
            ))
        )
     }

}