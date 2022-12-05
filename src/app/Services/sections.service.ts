import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BBB } from '../bbb';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllSections(){
    return this.http.get(`http://localhost:3004/sections/`,{
      withCredentials: true
    })
  }
  public getSectionById(id:number){
    return this.http.get(`http://localhost:3004/sections/${id}`,{
      withCredentials: true
    })
  }

}
