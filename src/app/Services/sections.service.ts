import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BBB } from '../bbb';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BASE_URL } from '../global/global';


@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getSectionById(id:number){
    return this.http.get<BBB.section []>(`${BASE_URL}/section/${id}`,{
    })
  }

  public getTeamBySection(section:number){
    return this.http.get<BBB.team>(`api/equipe/?section=${section}`,{
    })}

}
