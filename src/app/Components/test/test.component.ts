import {
  Component,
  OnInit
} from '@angular/core';
import { BBB } from 'src/app/bbb';
import {
  PartnersService
} from 'src/app/Services/partners.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public partners: BBB.partners
  constructor(private partnersService: PartnersService) {}

  ngOnInit(): void {
    this.getPartners()
  }
  public getPartners() {
    this.partnersService.getAllPartners()
      .subscribe((r: any) => {
        this.partners = r
      })
  }
}
