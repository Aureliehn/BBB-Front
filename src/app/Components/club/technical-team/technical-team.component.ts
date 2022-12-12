import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-technical-team',
  templateUrl: './technical-team.component.html',
  styleUrls: ['./technical-team.component.css']
})
export class TechnicalTeamComponent implements OnInit {
  public members: any[]=[];
  constructor(
    private clubService : ClubService
  ) { }

  ngOnInit(): void {
    this.getMembers()
    console.log(this.members)
  }

  public getMembers(){
    this.clubService.getTeamMembers()
    .subscribe((r:[])=>{
      this.members = r
    })
  }
}
