import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() teams : any
  constructor() { }

  ngOnInit(): void {
    console.log("team slid", this.teams)
  }

}
