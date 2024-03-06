import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validator/email-validator.service';
//import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/validator/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({

    name: ['', [Validators.required, Validators.pattern(this.validatorServices.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorServices.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorServices.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators: [this.validatorServices.isFieldoneEqualFieldTwo('password', 'password2')],
  });

  constructor(
    private fb: FormBuilder,
    private validatorServices: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValidField( field: string){
      return this.validatorServices.isValidField(this.myForm, field);
  }

  onSubmit(){

    this.myForm.markAllAsTouched();
  }



}
