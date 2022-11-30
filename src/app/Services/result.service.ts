import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private http: HttpClient
    ) { }

  public getResult(){
    return this.http.get("http://localhost:3004/result",{
      withCredentials: true
    })
  }

}
