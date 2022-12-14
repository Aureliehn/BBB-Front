import { Component, NgModule, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/Services/partners.service';
import { SectionsService } from 'src/app/Services/sections.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
public partners : []
public section: any
  constructor(
    private partnersService : PartnersService,
    private sectionService: SectionsService
  ) { }

  ngOnInit(): void {
this.getPartners()
this.getSection(1)
  }
  public getPartners(){
    this.partnersService.getAllPartners()
    .subscribe((r:any)=>{
          this.partners = r;
      
        })
  }
  public getSection(sectionId: number){
    this.sectionService.getSectionById(sectionId)
    .subscribe((r:any)=>{
      console.log(r);
    })
  };
}
