import { Component } from '@angular/core';
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {
  FormBuilder, FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {

  faEnvelopeOpen = faEnvelopeOpen;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
}



