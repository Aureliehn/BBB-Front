import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    this.route.params.subscribe(
      (data) =>{
        console.log(data)
        if(data.id === '1'){
          this.getSection(1)
        }
        else if(data.id === '2'){
          this.getSection(2)
        }
        else{
          this.getSection(3)
        }
      }
    )
  }

  public getSection(sectionId: number){
    this.sectionService.getSectionById(sectionId)
    .subscribe((r:any)=>{
      this.section = r;
      this.getTeamBySection(sectionId)
    })
  };
  public getTeamBySection(section:number){
    this.sectionService.getTeamBySection(section)
    .subscribe((t)=>this.teams = t)
    // console.log(this.teams)
  }



}
