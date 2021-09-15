import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {

  form: FormGroup;
  messageAlert: string = '';
  cellValidation = /^[0-9]+$/;

  constructor() {
    this.buildForm();
  }

  buildForm(): void{
    const validatorLenght = 1;
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(validatorLenght)]),
      email: new FormControl('',[Validators.required, Validators.minLength(validatorLenght), Validators.email]),
      cell: new FormControl('',[Validators.required, Validators.minLength(validatorLenght), Validators.pattern(this.cellValidation)]),
      publication: new FormControl('',[Validators.required, Validators.minLength(validatorLenght)]),
    });
  }

  onSubmit(): void{
    const value = this.form.value;
    this.messageAlert =
      `Se ha creado exitosamente una publicación del tipo ${value.publication}`;
    this.clearInputs();
    this.hideAlert();
  }

  hideAlert(): void {
    const HIDE_ALERT = 4000;
    setTimeout(() => {
      this.messageAlert = '';
    }, HIDE_ALERT);
  }

  validationInput(label:string): string {
    if(!this.form.value[label]){
      return '';
    }
    const validation = this.form.get(label).touched && this.form.get(label).invalid;
    return validation ? 'is-invalid': 'is-valid';
  }

  clearInputs(): void {
    this.form.reset();
  }
}
