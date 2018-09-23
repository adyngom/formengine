import { FormBuilder, FormGroup } from "@angular/forms";
import { FormBuilderObject } from './models.d';

export class FormengineClass {
  private formBuilder: FormBuilder = new FormBuilder();
  public formInstance: any;
  public formConfigObject: FormBuilderObject;
  public formGroup: FormGroup;
  public form: any;

  constructor(config: FormBuilderObject) {
    this.formConfigObject = config;

    this.form = this.formBuilder.group({
      'firstName': [''],
      'lastName': ['']
    });

    Object.assign(this, config);
    console.log(config);
  }
}
