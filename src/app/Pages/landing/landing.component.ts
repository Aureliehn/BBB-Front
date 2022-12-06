import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
// ANCHOR DECOMMENTE TOUT
  constructor(
    // private ClubService: ClubService
  ) { }

  ngOnInit(): void {
  // this.getTest()
  // console.log("landinf")
  }

  // public getTest(){
  //   console.log("fct")
  //   this.ClubService.getTest()
  //     .subscribe((r:[])=>{
  //       console.log(r, "hhhhhhhhhhhhhhh")
  //     })}

}

