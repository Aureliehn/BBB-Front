import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  constructor(
    private http: HttpClient
    ) { }

  public getUpcoming(){
    return this.http.get(`${BASE_URL}/match`,{
    })
  }
}
