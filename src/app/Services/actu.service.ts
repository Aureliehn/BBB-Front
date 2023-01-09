import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class ActuService {

  constructor(
    private http: HttpClient
  ) { }

  public getActu(){
    return this.http.get(`${BASE_URL}/actu`,{
    })
  }
}
