import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-dashboard-result',
  templateUrl: './dashboard-result.component.html',
  styleUrls: ['./dashboard-result.component.css']
})
export class DashboardResultComponent implements OnInit {
  public result: any[]=[];
  public section: number = 3

  constructor(
    private resultService : ResultService
  ) { }

  ngOnInit(): void {
    this.getResult(this.section);
  }

  public getResult(section  : number){
    this.resultService.getResult()
    .subscribe((r:[])=>{
      this.result = r;
      if(section!=0){
        const datas:any[]= this.result.filter(function(d){
          return d.section === section;
        })
        this.result = datas;
      }
    })
  }
  public handleSection(section){
    this.section = section
    this.getResult(this.section)
  }
}
