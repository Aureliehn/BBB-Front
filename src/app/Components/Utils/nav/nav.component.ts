import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
public urlShop : string = "https://bb-sports.fr/";
public menuCloseMobile: boolean = false
public responsive: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  goToWebsite(){
    window.open(this.urlShop, "_blank")
  }
  logoMenuIsClicked(){
    this.menuCloseMobile = true
  }
}
