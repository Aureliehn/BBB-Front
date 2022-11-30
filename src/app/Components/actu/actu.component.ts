import { Component, OnInit } from '@angular/core';
import { ActuService } from 'src/app/Services/actu.service';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {

  public actu: any[]= [];

  constructor(
    private actuService: ActuService
  ) { }

  ngOnInit(): void {
    this.getActu();
  }

  public getActu(){
    this.actuService.getActu()
    .subscribe((r:[])=>{
      this.actu = r
      console.log(this.actu)
    })
  }
}
