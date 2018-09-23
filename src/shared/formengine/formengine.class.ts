import { FormBuilder, FormGroup } from "@angular/forms";
import { FormBuilderObject } from './models.d';
import { ProjectValidators } from "./validators/ValidatorFields";

export class FormengineClass {
  private formBuilder: FormBuilder = new FormBuilder();
  public formInstance: any;
  public formGroup: FormGroup = {};
  public form: any;

  constructor(config: FormBuilderObject) {
    Object.assign(this, config);

    // assign validators group
    if (this.validators.length < 2) {
      if (!!ProjectValidators[this.validators[0].toLowerCase()]) {
        this.formGroup = ProjectValidators[this.validators[0].toLowerCase()];
      }
    }

    this.form = this.formBuilder.group(this.formGroup);

    console.log(this);
  }
}
