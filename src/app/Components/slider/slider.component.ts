import { Component, OnInit, Input } from '@angular/core';
import { SectionsService } from 'src/app/Services/sections.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  @Input() section : any
  @Input() teams : any
constructor(private sectionService: SectionsService){}
  ngOnInit(): void {
  }

  public getTeamBySection(id:number){
    console.log('slider')
    this.sectionService.getTeamBySection(id)
    .subscribe((response)=>console.log(response, 'res', 'thissection', this.section))
  }
}

