
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

  constructor(
    private http: HttpClient,
    private router: Router
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
      this.postDataFormContact(this.contactForm.value)
    }else{
      this.errorFields = true
      console.log("no")
    }

  }
  // public postDataFormContact(){
  //   console.log(this.contactForm.value)
  //   this.http.post("http://localhost:3004/messages",{
  //     firstName : this.contactForm.get('firstName'),
  //     lastName : this.contactForm.get('lastName'),
  //     phoneNumer : this.contactForm.get('phoneNumer'),
  //     mail : this.contactForm.get('mail'),
  //     message : this.contactForm.get('message'),
  //   }, {
  //     withCredentials: true,
  //   })
  //   .subscribe({
  //     next: () => console.log("ok"),
  //     error: (e) => console.log(e)
  //   })

  // }
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
