import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BBB } from 'src/app/bbb';
import { SectionsService } from 'src/app/Services/sections.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {

  public sectionId: number = 0;
  public section : any;
  // public teams: BBB.team
  public equipe: BBB.team[] =[]
  teams$ : BehaviorSubject<any> = new BehaviorSubject<any>(this.equipe)

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
    .subscribe({
      next: (r:BBB.section[])=>{
        this.section = r;
        this.getTeamBySection(sectionId)
      }
    })
  };
  
  public getTeamBySection(section:number){
    this.sectionService.getTeamBySection(section)
    .subscribe({
      next:(response: any)=>
      {
        this.teams$ = response
        console.log(this.teams$, "teams$")
      }
      
    })

  }
  // public getTeamBySection(section:number){
  //   this.sectionService.getTeamBySection(section)
  //   .subscribe({
  //     next: (t: BBB.team)=>this.teams = t
  //   })
  // }
}
