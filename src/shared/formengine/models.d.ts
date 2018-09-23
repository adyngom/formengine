export interface GenericFunction {
  [ key: string ]: (...args: any[]) => any;
}

export interface FormBuilderObject {
  fields: Array<string>;
  validators: Array<any>; // TODO: create proper custom type for Validator Objects
  onSave: Function;
  onLoad: Function;
  onNew: Function;
  extend?: any;
}
