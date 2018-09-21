import { Validators, ValidatorFn, AsyncValidator, AsyncValidatorFn} from "@angular/forms";

import { PasswordValidator } from "./CustomValidators";


const MIN_PASS_LENGTH = 6;

export const HLXFieldsRules = {
  required: Validators.required,
  minLength: ( size: number ) => Validators.minLength(size),
  maxLength: ( size: number ) => Validators.maxLength(size),
  passwordFormat: ( size: number) => PasswordValidator(size)
};
