import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn :'root'
})

export class FaceSnapsService{
    faceSnaps: FaceSnap[]=[
        {
          id:0,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 100,
          location : 'Paris'
        },
        {
          id:1,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'the mountain'
        
        },
         {
          id:2,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ] 

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps
    }
    getFaceSnapById(id:number): FaceSnap{
       const result = this.faceSnaps.find((faceSnap)=>faceSnap.id===id)
       if (result===undefined) {
        throw new Error('FaceSnap not found');
       } else {
        return result
       }
    }
    SnapByFaceSnapId(id:number, snapType : 'plus' | 'minus'): void{
        const result = this.getFaceSnapById(id)
        snapType === 'plus' ? result.snaps++ : result.snaps--
     }

}