import {Component, Input} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Input() waitingFor: any;

  constructor(){}
  ngOnInit(): void {
    console.log(this.waitingFor, 'wait')
  }

}