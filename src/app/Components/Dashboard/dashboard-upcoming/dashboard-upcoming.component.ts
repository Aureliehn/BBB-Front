import { Component, OnInit } from '@angular/core';
import { UpcomingService } from 'src/app/Services/upcoming.service';


@Component({
  selector: 'app-dashboard-upcoming',
  templateUrl: './dashboard-upcoming.component.html',
  styleUrls: ['../dashboard-result/dashboard-result.component.css']
})

export class DashboardUpcomingComponent implements OnInit {
  public result: any[]=[];
  public section: number = 3
  public currentDate: Date;
  public dataNull: boolean = false;
  constructor(
    private upCommingService : UpcomingService
  ) { }

  ngOnInit(): void {
   this.getMatch(this.section);
  }

  public getMatch(section  : number){
    this.upCommingService.getUpcoming()
    .subscribe((r:[])=>{
      this.result = r;
      if(section!=0){
        const datas:any[]= this.result.filter(function(d){
          return d.section === section;
        })
        this.result = datas;
        console.log('r', this.result)
        this.dataNull = this.result.length === 0;
      }
    })
  }
  public handleSection(section){
    this.section = section;
    this.getMatch(this.section);
  }
}
