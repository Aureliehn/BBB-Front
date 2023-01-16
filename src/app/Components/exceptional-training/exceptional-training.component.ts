import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Services/training.service';
import { TrainingComponent } from '../club/training/training.component';


@Component({
  selector: 'app-exceptional-training',
  templateUrl: './exceptional-training.component.html',
  styleUrls: ['./exceptional-training.component.css']
})
export class ExceptionalTrainingComponent extends TrainingComponent implements OnInit{
  
  public frequence: string = 'UNE';
  public isOpen = true;
  
  constructor(trainingService: TrainingService) {
    super(trainingService);
  }
  
  ngOnInit() {
    super.ngOnInit(); 
    this.trainingService.getAllTraining().subscribe(
        (r: []) => {
          this.allTraining = r;
          this.sortTraining();
        },
        (error) => {
          console.error(error);
        }
    );
}

  public sortTraining(): void {
    super.sortTraining();
    this.allTraining = this.allTraining.filter( (d)=> d.frequence === this.frequence);
  }
}

