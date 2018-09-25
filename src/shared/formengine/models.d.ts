import { Observable } from 'rxjs';
 
export interface GenericFunction {
  [ key: string ]: (...args: any[]) => any;
}

export interface FormBuilderObject {
  fields: Array<string>;
  validators: Array<any>; // TODO: create proper custom type for Validator Objects
  onSave: Observable<Function>;   // observable
  onLoad: Observable<Function>;  // observable
  onNew: Observable<Function>;  // observable
  extend?: any;
}
