import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private http: HttpClient
    ) { }
    
  public getAllTraining(){
    return this.http.get(`${BASE_URL}/entrainement`,{
    })
  }

}
