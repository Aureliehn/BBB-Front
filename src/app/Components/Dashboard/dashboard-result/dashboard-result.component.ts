import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-dashboard-result',
  templateUrl: './dashboard-result.component.html',
  styleUrls: ['./dashboard-result.component.css']
})
export class DashboardResultComponent implements OnInit {
  public result: any[]=[];
  public section: string ="mini";

  constructor(
    private resultService : ResultService
  ) { }

  ngOnInit(): void {
    this.getResult(this.section);
  }

  public getResult(section: string){
    this.resultService.getResult()
    .subscribe((r:[])=>{
      this.result = r
      if(section!=''){
        const datas:any[]= this.result.filter(function(d){
          return d.section === section
        })
        this.result = datas
      }
    })
  }

  public handleSection(section:string){
    this.section = section
    this.getResult(this.section)
  }
}
