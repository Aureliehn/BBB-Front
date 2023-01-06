
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  public successMessage: boolean = false;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]) ,
      phoneNumber : new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(30)]),

  })
  }

  // public submit(){
  //   if(this.contactForm.valid){
  //     this.postDataFormContact(this.contactForm.value)
  //   }else{
  //     this.errorFields = true
  //   }
  // }
  public submit() {
    this.errorFields = !this.contactForm.valid;
    if (this.contactForm.valid) {
      this.postDataFormContact(this.contactForm.value);
    }
  }
  

  public postDataFormContact(contactForm){
    return fetch("http://localhost:3004/messages",{
        method: 'POST',
        body: JSON.stringify(contactForm),
        headers: {'Content-Type':'application/json'},
    })
    .then(()=>this.successMessage = true)
    .then(()=>this.contactForm.reset({
      message: '',
      firstName: '',
      lastName: '',
      phoneNumber:  '',
      mail: ''
  }))
  }
}
