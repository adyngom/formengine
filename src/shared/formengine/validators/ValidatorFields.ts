import { Validators, ValidatorFn, AsyncValidator, AsyncValidatorFn} from "@angular/forms";

import { PasswordValidator } from "./CustomValidators";

export const HLXFieldsRules = {
  required: Validators.required,
  minLength: ( size: number ) => Validators.minLength(size),
  maxLength: ( size: number ) => Validators.maxLength(size),
  passwordFormat: ( size: number) => PasswordValidator(size),
  emailFormat: Validators.email
};

firstName: {
  validator: '',
  error: '',
}

// TODO: this should be in its own file and should import the HLXFieldsRules object
export const ProjectValidators = {
  'firstName': Validators.compose([HLXFieldsRules.required, HLXFieldsRules.minLength(2)]),
  'lastName': Validators.compose([HLXFieldsRules.required, HLXFieldsRules.minLength(2)]),
  'email': Validators.compose([HLXFieldsRules.required, HLXFieldsRules.emailFormat]),
  'password': Validators.compose([HLXFieldsRules.required, HLXFieldsRules.passwordFormat(8)])
}

export const ProjectFormValidators = {
  'signup': {
    'firstName': ProjectValidators.firstName,
    'lastName': ProjectValidators.lastName,
    'email': ProjectValidators.email,
    'password': ProjectValidators.password
  },
  'login': {
    'email': ProjectValidators.email,
    'password': ProjectValidators.password
  },
  'create-project': {

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

export const ProjectInitialValues = {
  signup: {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': ''
  },
  login: {
    'email': '',
    'password': ''
  }
}


