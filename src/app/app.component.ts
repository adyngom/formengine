import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormengineClass } from "../shared/formengine/formengine.class";
import { ProjectValidators } from '../shared/formengine/validators/ValidatorFields';

@Component({
  selector: 'hlx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppComponentBase {
  title = 'fengpoc';
  public appForm: FormGroup;

  constructor() {
    this.appForm = new FormengineClass({
      fields: ['firstName', 'lastName', ['address', ['street', 'city']]],
      validators: ProjectValidators,
      onSave: (...data) => console.log(data),
      onLoad: (...data) => console.log(data),
      onNew: (...data) => console.log(data)
    });


    myFn() {
      this.appForm.build() //; FormGroup
    }
    
  }

  // helper function for easy reference in html template
  get f() {
    return this.appForm.controls;
  }

  onSubmit() {
    console.log(this.appForm.value);
  }
}
