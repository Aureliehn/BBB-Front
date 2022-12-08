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
    })
  }
  public getFunctionalTeamMembers(){
    return this.http.get("http://localhost:3004/functionalTeam",{
    })
  }
  public getComTeamMembers(){
    return this.http.get("http://localhost:3004/ComTeam",{
    })
  }
  // ANCHOR DECOMMENTE ICI
  public getTest(){
    console.log("fction2")
    return this.http.get("http://localhost:8000/api/tournament",{

    })
  }

}
