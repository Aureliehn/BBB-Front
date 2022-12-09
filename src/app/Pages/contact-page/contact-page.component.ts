
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  public contactForm : FormGroup;
  public mail: string = '';
  public phoneNumber: number = 0;
  public firstName: string = '';
  public lastName: string = '';
  public message: string = '';
  public errorFields: boolean = false;

  constructor(
  ) { 

  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]) ,
      phoneNumber : new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(30)]),

  })
  }

  public submit(){
    if(this.contactForm.valid){
      this.postDataFormContact()
    }else{
      this.errorFields = true
      console.log("no")
    }

  }
  public postDataFormContact(){
    console.log(this.contactForm.value)
  }
}
