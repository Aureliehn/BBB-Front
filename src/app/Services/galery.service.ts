import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor(
    private http: HttpClient
  ) { }

  public getAlbum(){
    return this.http.get(`${BASE_URL}/album`,{
    })
  }
  public getPicturesByAlbum(album: number){
    return this.http.get(`${BASE_URL}/album/${album}`,{
    })
  }
}
