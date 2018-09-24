import { FormBuilder, FormGroup } from "@angular/forms";
import { FormBuilderObject } from './models.d';
import { ProjectValidators } from "./validators/ValidatorFields";

export class FormengineClass {
  private formBuilder: FormBuilder = new FormBuilder();
  public formInstance: any;
  public initFormGroup: FormGroup;
  public formGroup: FormGroup;
  public form: any;
  public fields: Array<string>;
  public validators: Array<string>;

  // onLoad use case:
  // public objectFromDB: Object = {
  //   firstName: 'Ady',
  //   lastName: 'Ngom',
  //   email: 'angom@gmailll.com'
  // };


  constructor(config: FormBuilderObject) {
    Object.assign(this, config);

    // assign validators group
    if (this.validators.length < 2) {
      if (!!ProjectValidators[this.validators[0].toLowerCase()]) {
        this.formGroup = ProjectValidators[this.validators[0].toLowerCase()];
      }
    }

    this.form = this.formBuilder.group(this.formGroup);

    // onLoad use case
    // if (!!this.objectFromDB) {
    //   for(let key in this.objectFromDB) {
    //     this.form.patchValue({
    //       [key]: this.objectFromDB[key]
    //     })
    //   }
    // }

  }
}
