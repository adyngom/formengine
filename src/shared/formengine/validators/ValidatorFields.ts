import { Validators, ValidatorFn, AsyncValidator, AsyncValidatorFn} from "@angular/forms";

import { PasswordValidator } from "./CustomValidators";
import { Observable } from "rxjs";

export const HelixFieldsValidations = {
  required: Validators.required,
  requiredWithMinLength: (size: number) => Validators.compose([Validators.required, Validators.minLength(size)]),
  minLength: ( size: number ) => Validators.minLength(size),
  maxLength: ( size: number ) => Validators.maxLength(size),
  passwordFormat: ( size: number) => PasswordValidator(size),
  emailFormat: Validators.email
};





// TODO: this should be in its own file and should import the HLXFieldsRules object
export const ProjectValidators = {
  'firstNameZ': HelixFieldsValidations.required,
  'firstName': HelixFieldsValidations.requiredWithMinLength(2),
  'lastName': Validators.compose([HLXFieldsRules.required, HLXFieldsRules.minLength(2)]),
  'email': Validators.compose([HLXFieldsRules.required, HLXFieldsRules.emailFormat]),
  'myPassword': Validators.compose([HLXFieldsRules.required, HLXFieldsRules.passwordFormat(8)])
}

// This shoud be in its own domain service
export class ProjectService {
  myValidators: ProjectValidators,

  load(id: string): Observable<ProjectDto> {
    ...
  }

  save(model: ProjectDto): Observable<ProjectDto> {
    ...
  }
}


CreateProjectErrors = {
  'required': true,
  'min': {'min': 3, 'actual': 2}
}

export const ValidationErrorMessages = {
  'required': 'This field is required',
  'min': 'Please provide value greater than {actual}',
  'firstName'
}

export const ProjectErrorMessages = {
  'firstName': [ValidationErrorMessages.min, ValidationErrorMessages.required]
}



