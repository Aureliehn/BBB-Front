import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private http: HttpClient
    ) { }

  public getAllTraining(){
    console.log("service");
    return this.http.get("http://localhost:3004/training",{
    })
  }
  // public getAllTrainingBySection(section:string){
  //   console.log("service");
  //   return this.http.get("http://localhost:3004/training",{
  //     withCredentials: true
  //   })
  // }
}
