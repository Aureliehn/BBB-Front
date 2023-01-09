import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(
    private http: HttpClient
    ) { }

  public getTeamMembers(){
    return this.http.get(`${BASE_URL}/profil`,{
    })
  }
  public getLicence(){
    return this.http.get(`${BASE_URL}/licence`)
  }

}
