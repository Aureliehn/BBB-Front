import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllSections(){
    return this.http.get(`http://localhost:3004/sections/`,{
    })
  }
  public getSectionById(id:number){
    return this.http.get(`api/section/${id}`,{
    })
  }

  public getTeamBySection(section:number){
    console.log('section recue', section)
    return this.http.get(`api/equipe/?section=${section}`,{
    })}

}
