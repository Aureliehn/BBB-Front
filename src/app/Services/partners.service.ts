import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http: HttpClient) { }

  public getAllPartners(){
    return this.http.get("http://localhost:3004/partners",{
    })
  }
  // public getAllPartners(){
  //   return this.http.get("api/partenaire/",{
  //   })
  // }
    
  
}
