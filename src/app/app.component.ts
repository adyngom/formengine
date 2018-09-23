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
      validators: [''],
      onSave: (...data) => console.log(data),
      onLoad: (...data) => console.log(data),
      onNew: (...data) => console.log(data)
    }).form;

    console.log(this.appForm);
  }
}
