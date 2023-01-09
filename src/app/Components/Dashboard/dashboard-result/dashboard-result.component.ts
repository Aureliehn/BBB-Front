import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-dashboard-result',
  templateUrl: './dashboard-result.component.html',
  styleUrls: ['./dashboard-result.component.css']
})
export class DashboardResultComponent implements OnInit {
  public result: any[]=[];
  public dataNull: boolean = false;
  constructor(
    private resultService : ResultService
  ) { }

  ngOnInit(): void {
    this.getResult();
  }

  public getResult(section: number = null){
    this.resultService.getResult()
    .subscribe((r:[])=>{
      this.result = r;
      if (section !== null) {
        const filteredResults = this.result.filter(result => result.section === section);
        this.result = filteredResults;
      }
      this.dataNull = this.result.length === 0;
    })
  }

  public handleSection(section) {
    this.getResult(section);
  }
}
