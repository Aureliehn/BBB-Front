import {
  HttpClient
} from '@angular/common/http';
import {
  Message
} from '@angular/compiler/src/i18n/i18n_ast';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  public contactForm: FormGroup;
  public expediteur: string = '';
  public telephone: number = 0;
  public prenom: string = '';
  public nom: string = '';
  public message: string = '';
  public errorFields: boolean = false;
  public successMessage: boolean = false;

  constructor(
    private http: HttpClient
  ){}
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      expediteur: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(30)]),
    })
  }


  public submit() {
    this.errorFields = !this.contactForm.valid;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
      this.postDataFormContact();
    }
  }


  public postDataFormContact() {
    this.http.post('api/contact-form/', {
      message: this.message,
      prenom: this.prenom,
      nom: this.nom,
      telephone: this.telephone,
      expediteur: this.expediteur
    }, {
      withCredentials: true,
    }
)
    .subscribe({
      next: () => this.successMessage = true,
      error: (e) => console.log(e)
    })

}
}
//   public postDataFormContact(contactForm) {

//     return fetch("http://localhost:3004/messages", {
//         method: 'POST',
//         body: JSON.stringify(contactForm),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       })
//       .then(() => this.successMessage = true)
//       .then(() => this.contactForm.reset({
//         message: '',
//         prenom: '',
//         nom: '',
//         telephone: '',
//         expediteur: ''
//       }))
//   }
// }
// a récupérer 
// prenom ok
// nom ok
// expediteur (email) ok
// telephone ok
// titre ok
// Message
// candidature
//  url/api/contact-form