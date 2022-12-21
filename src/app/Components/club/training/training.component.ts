import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public allTraining : any[]= [];
  spMonday: any[]=[]
  monday: any[]=[]
  tuesday : any[]=[]
  wednesday : any[]=[]
  thursday: any[]=[]
  friday: any[]=[]
  saturday: any[]=[]
  // public training : any[]= [];
  // public trainingOld : any[]= [];
  // public trainingYoung : any[]= [];
  // public trainingMini : any[]= [];
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
    // this.getTrainingBySection("mini");
    // this.getTrainingBySection("old");
    // this.getTrainingBySection("young");
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
  console.log(this.monday, 'monday', this.thursday, 'thr', this.saturday, 'sa')
}
  // public getTrainingBySection(section:string){
  //   console.log("ici")
  //   this.trainingService.getAllTraining()
  //   .subscribe((r:[])=>{
  //     this.training = r
  //   if(section === 'mini'){
  //     const datas:any[]= this.training.filter(function(d){
  //       return d.section === "mini"
  //     })
  //     this.trainingMini = datas
  //     console.log("h", this.trainingMini)
  //   }else if(section === 'young'){
  //     const datas:any[]= this.training.filter(function(d){
  //       return d.section === "young"
  //     })
  //     this.trainingYoung = datas
  //     console.log("y", this.trainingYoung)
  //   }else if(section === 'old'){
  //     const datas:any[]= this.training.filter(function(d){
  //       return d.section === "old"
  //     })
  //     this.trainingOld = datas
  //     console.log("o", this.trainingOld)
  //   }
  //   })
    
  // }

}
