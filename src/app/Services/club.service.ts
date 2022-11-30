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
    return this.http.get("http://localhost:3004/technicalTeam",{
      withCredentials: true
    })
  }
  public getFunctionalTeamMembers(){
    return this.http.get("http://localhost:3004/functionalTeam",{
      withCredentials: true
    })
  }
  public getComTeamMembers(){
    return this.http.get("http://localhost:3004/ComTeam",{
      withCredentials: true
    })
  }

}
