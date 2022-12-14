import { Component, OnInit, Input } from '@angular/core';
import { SectionsService } from 'src/app/Services/sections.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  @Input() section : any
  // @Input() teams : any
constructor(private sectionService: SectionsService){}
  ngOnInit(): void {
    if(this.section === 1){
      this.getTeamBySection(1)
    }else if(this.section == 2){
      this.getTeamBySection(2)
    }
    else{
      this.getTeamBySection(3)
    }
    // console.log('section SliderComponent', this.section)

    
  }

  public getTeamBySection(id:number){
    console.log('slider')
    this.sectionService.getTeamBySection(id)
    // .subscribe((response)=>console.log('yooo'))
    .subscribe((response)=>console.log(response, 'res', 'thissection', this.section))
  }
}

