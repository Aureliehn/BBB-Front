import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/Services/partners.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public partners: any
  constructor(private partnersService : PartnersService) { }

  ngOnInit(): void {
    this.getPartners()
  }
public getPartners(){
  this.partnersService.getAllPartners()
  .subscribe((r:any)=>{
    console.log(r)
  this.partners = r
console.log(this.partners, 'trt')})
  // console.log(this.partners)
}
}
