import { Component, OnInit } from '@angular/core';
import { UpcomingService } from 'src/app/Services/upcoming.service';

@Component({
  selector: 'app-dashboard-upcoming',
  templateUrl: './dashboard-upcoming.component.html',
  styleUrls: ['./dashboard-upcoming.component.css']
})
export class DashboardUpcomingComponent implements OnInit {
  public result: any[]=[];
  public section: string ="mini";

  constructor(
    private upCommingService : UpcomingService
  ) { }

  ngOnInit(): void {
   this.getMatch(this.section);
  }

  public getMatch(section  : string){
    this.upCommingService.getUpcoming()
    .subscribe((r:[])=>{
      this.result = r;
      if(section!=''){
        const datas:any[]= this.result.filter(function(d){
          return d.section === section;
        })
        this.result = datas;
      }
    })
  }
  public handleSection(section){
    this.section = section;
    this.getMatch(this.section);
  }
}
