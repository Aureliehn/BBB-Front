import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  constructor(
    private http: HttpClient
    ) { }

  // public getUpcoming(){
  //   return this.http.get("http://localhost:3004/up",{
  //   })
  // }
  public getUpcoming(){
    return this.http.get("api/match",{
    })
  }
}
  // public  getResult(){
  //   return this.http.get("api/resultat",{
  //   })
  // }