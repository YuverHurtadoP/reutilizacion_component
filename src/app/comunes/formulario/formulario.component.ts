import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  implements OnInit{
  @Input() formConfig: any[] = [];
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({});
    this.formConfig.forEach(control => {
      this.form.addControl(control.name, this.fb.control(control.value, this.getValidators(control.validators)));
    });
  }
  getValidators(validators: any) {
    const formValidators = [];
    if (validators) {
      if (validators['required']) formValidators.push(Validators.required);
      if (validators['minLength']) formValidators.push(Validators.minLength(validators['minLength']));
      if (validators['maxLength']) formValidators.push(Validators.maxLength(validators['maxLength']));
      if (validators['pattern']) formValidators.push(Validators.pattern(validators['pattern']));
    }
    return formValidators;
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
      console.log(this.form.value.username)
    }
  }

}
