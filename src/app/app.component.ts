import { Component } from '@angular/core';
import { FormGroup, ValidatorFn, AsyncValidatorFn } from "@angular/forms";
import { FormengineClass } from "../shared/formengine/formengine.class";
import { ProjectValidators } from '../shared/formengine/validators/ValidatorFields';
import { Observable } from 'rxjs';

export interface FormDomainService<TPrimaryKey, TModel> {
  /**
   * Flat model that stores field values
   */
  model: TModel;
  /**
   * Primary key for the model or null (if it is "new" form)
   */
  modelId: TPrimaryKey | null;
  /**
   *
   */
  saveModel(): Observable<TModel>;
  loadModel(): Observable<TModel>;
  newModel(): TModel;
  cancelModel();
  syncValidators: { [fieldName: string]: ValidatorFn | ValidatorFn[] };
  asyncValidators?: { [fieldName: string]: AsyncValidatorFn | AsyncValidatorFn[] };
}

export interface FormEngineConfiguration<TPrimaryKey, TModel> {
  fields: Array<string>;
  service: FormDomainService<TPrimaryKey, TModel>
}

export interface FormInstance<TPrimaryKey, TModel> {
  form: FormGroup;

  isNewForm(): boolean;

  isFormValid(): boolean;
  isFormDirty(): boolean;
  isFormTouched(): boolean;

  isFieldValid(fieldName: string): boolean;
  isFieldDirty(fieldName: string): boolean;
  isFieldTouched(fieldName: string): boolean;

  reset();
  reload(): Observable<any>;

  save(): Observable<any>;
  cancel();
}

export interface FormEngineBuilder<TPrimaryKey, TModel> {
  build(config: FormEngineConfiguration<TPrimaryKey, TModel>): FormInstance<TPrimaryKey, TModel>;
}

@Component({
  selector: 'hlx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppComponentBase {
  title = 'fengpoc';
  public appForm: FormEngineInstance<string, ProjectDto>;

  xxx : ProjectDto = {
    firstName: 'igor',
    lastName: 'asdhjgsadhshdgshsgdgdsgsfd',
  }

  constructor(private projectService: ProjectService) {
    this.appForm.save().subscribe(_ => {
      .....navigate away....
    }, e => {
      alert(e.toString());
    });

  }

  // helper function for easy reference in html template
  // get f() {
  //  return this.appForm.controls;
  //}

 
}
