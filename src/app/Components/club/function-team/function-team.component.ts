import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-function-team',
  templateUrl: './function-team.component.html',
  styleUrls: ['./function-team.component.css']
})
export class FunctionTeamComponent implements OnInit {
  public members: any[]=[];
  public membersCom : any[]=[];
  public membersBureau: any[]=[];
  constructor(
    private clubService : ClubService
  ) { }

  ngOnInit(): void {
    this.getMembers();
    this.getComMembers();
    console.log(this.membersBureau, "ici")
  }

  public getMembers(){
    this.clubService.getFunctionalTeamMembers()
    .subscribe((r:[])=>{
      this.members = r
    })
  }
  public getComMembers(){
    this.clubService.getComTeamMembers()
    .subscribe((r:[])=>{
      this.membersCom = r
    })
  }
}