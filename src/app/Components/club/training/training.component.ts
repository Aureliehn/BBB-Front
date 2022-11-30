import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public allTraining : any[]= [];
  public training : any[]= [];
  public trainingOld : any[]= [];
  public trainingYoung : any[]= [];
  public trainingMini : any[]= [];

  constructor(
    private trainingService : TrainingService
  ) { }

  ngOnInit(): void {
    this.getAllTraining()
    this.getTrainingBySection("mini");
    this.getTrainingBySection("old");
    this.getTrainingBySection("young");
  }
public getAllTraining(){
  this.trainingService.getAllTraining()
    .subscribe((r:[])=>{
      this.allTraining = r
    })
}
  public getTrainingBySection(section:string){
    console.log("ici")
    this.trainingService.getAllTraining()
    .subscribe((r:[])=>{
      this.training = r
    if(section === 'mini'){
      const datas:any[]= this.training.filter(function(d){
        return d.section === "mini"
      })
      this.trainingMini = datas
      console.log("h", this.trainingMini)
    }else if(section === 'young'){
      const datas:any[]= this.training.filter(function(d){
        return d.section === "young"
      })
      this.trainingYoung = datas
      console.log("y", this.trainingYoung)
    }else if(section === 'old'){
      const datas:any[]= this.training.filter(function(d){
        return d.section === "old"
      })
      this.trainingOld = datas
      console.log("o", this.trainingOld)
    }
    })
    
  }

}
