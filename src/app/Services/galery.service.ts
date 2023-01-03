import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor(
    private http: HttpClient
  ) { }

  public getAlbum(){
    return this.http.get("/api/album",{
    })
  }
  public getPicturesByAlbum(album: number){
    console.log('album recue', album)
    return this.http.get(`api/album/${album}`,{
    })
  }
}
