import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public allTraining : any[]= [];
  public spMonday: any[]=[]
  public monday: any[]=[]
  public tuesday : any[]=[]
  public wednesday : any[]=[]
  public thursday: any[]=[]
  public friday: any[]=[]
  public saturday: any[]=[]
  public sg : boolean = false
  public sf : boolean = false
  public lois : boolean = false
  public u18f : boolean = false
  public u17g : boolean = false
  public u15g : boolean = false
  public u15f : boolean = false
  public u13g : boolean = false
  public u13f : boolean = false
  public u11 : boolean = false
  public u9 : boolean = false
  public u7 : boolean = false

  constructor(
    private trainingService : TrainingService
  ) { }

  ngOnInit(): void {
    this.getAllTraining()
  }
public getAllTraining(){
  this.trainingService.getAllTraining()
    .subscribe((r:[])=>{
      this.allTraining = r
      console.log(this.allTraining, 't')
      this.tri()
    })
}
public tri(){
  for(let r of this.allTraining){
    if(r.jour === "LU"){
      this.monday.push(r)
    }
    else if(r.jour === "MA"){
      this.tuesday.push(r)
    }
    else if(r.jour === "ME"){
      this.wednesday.push(r)
    }
    else if(r.jour === "JE"){
      this.thursday.push(r)
    }
    else if(r.jour === "VE"){
      this.friday.push(r)
    }
    if(r.jour === "SA"){
      this.saturday.push(r)
    }
  }
}
}
