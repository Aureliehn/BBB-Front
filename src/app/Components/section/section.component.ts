import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SectionsService } from 'src/app/Services/sections.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {

  public sectionId: number = 0;
  public section : any;
  public teams: any;

  constructor(
    private route: ActivatedRoute,
    private sectionService : SectionsService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.pipe(
      filter(params => params.id)
    )
      .subscribe(params => {
        this.sectionId = params.id;
      }
    );
    this.getSection(this.sectionId);

  }

  public getSection(sectionId: number){
    this.sectionService.getSectionById(sectionId)
    .subscribe((r:any)=>{
      this.section = r;
      this.teams = this.section.teams ;
      console.log('teams', this.teams)
    })
  };

}
