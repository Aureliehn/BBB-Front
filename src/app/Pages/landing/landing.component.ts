import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
public showSpinner : boolean = false
  constructor(

  ) { }

  ngOnInit(): void {
this.showSpinnerHome()
  }

public showSpinnerHome(){
  this.showSpinner =true
  setTimeout(() => {
    this.hideSpinnerHome();
  }, 4000);
}
public hideSpinnerHome(){
  this.showSpinner= false
}
}
