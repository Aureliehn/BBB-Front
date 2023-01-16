import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DASHBOARD } from 'src/app/bbb';
import { SharedDashboardService } from 'src/app/Services/shared-dashboard.service';

@Component({
  selector: 'app-dashboard-result',
  templateUrl: './dashboard-result.component.html',
  styleUrls: ['../dashboard-result/dashboard-result.component.css']
})
export class DashboardResultComponent implements OnInit {
  public result: DASHBOARD.Result[] = [];
  public dataNull: boolean = false;
  public currentDate: Date;
  constructor(private sharedService: SharedDashboardService) { }

  ngOnInit(): void {
    this.getResult();
  }

  public getResult(section: number = 3) {
    this.sharedService.getResult(section)
    .pipe(
        tap(res => console.log(res, 'r'))
    )
    .subscribe(res => {
      this.result = res;
      this.dataNull = this.result.length === 0;
    });
  } 



  public handleSection(section: number) {
    this.getResult(section);
  }
}
