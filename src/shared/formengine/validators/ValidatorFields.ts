import { Validators, ValidatorFn, AsyncValidator, AsyncValidatorFn} from "@angular/forms";

import { PasswordValidator } from "./CustomValidators";

export const HLXFieldsRules = {
  required: Validators.required,
  minLength: ( size: number ) => Validators.minLength(size),
  maxLength: ( size: number ) => Validators.maxLength(size),
  passwordFormat: ( size: number) => PasswordValidator(size),
  emailFormat: Validators.email
};

// TODO: this should be in its own file and should import the HLXFieldsRules object
export const ProjectValidators = {
  signup: {
    'firstName': ['', Validators.compose([HLXFieldsRules.required, HLXFieldsRules.minLength(2)])],
    'lastName':  ['', Validators.compose([HLXFieldsRules.required, HLXFieldsRules.minLength(2)])],
    'email':     ['', Validators.compose([HLXFieldsRules.required, HLXFieldsRules.emailFormat])],
    'password':  ['', Validators.compose([HLXFieldsRules.required, HLXFieldsRules.passwordFormat(8)])]
  }
}
