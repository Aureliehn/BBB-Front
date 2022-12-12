import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(
    private http: HttpClient
    ) { }

  public getTeamMembers(){
    return this.http.get("api/profil/",{
    })
  }

}
