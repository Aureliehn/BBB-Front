import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-function-team',
  templateUrl: './function-team.component.html',
  styleUrls: ['./function-team.component.css']
})
export class FunctionTeamComponent implements OnInit {
  public members: any[]= [];
  public membersCom : any[]= [];
  public membersBureau: any[]= [];
  constructor(
    private clubService : ClubService
  ) { }

  ngOnInit(): void {
    this.getAllMembers();
  }

  public getAllMembers(){
    this.clubService.getTeamMembers()
    .subscribe((r:[])=>{
      console.log(r)
      this.members = r
      })
  }

}