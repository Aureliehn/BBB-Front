import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActuService {

  constructor(
    private http: HttpClient
  ) { }

  public getActu(){
    return this.http.get("http://localhost:3004/actu",{
      withCredentials: true
    })
  }
}
