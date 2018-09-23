import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormengineClass } from "../shared/formengine/formengine.class";

@Component({
  selector: 'hlx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fengpoc';
  public appForm: FormGroup;

  constructor() {
    this.appForm = new FormengineClass({
      fields: [''],
      validators: ['Signup'],
      onSave: (...data) => console.log(data),
      onLoad: (...data) => console.log(data),
      onNew: (...data) => console.log(data)
    }).form;

    console.log(this.appForm);
  }

  // helper function for easy reference in html template
  get f() {
    return this.appForm.controls;
  }

  onSubmit() {
    console.log(this.appForm.value);
  }
}
