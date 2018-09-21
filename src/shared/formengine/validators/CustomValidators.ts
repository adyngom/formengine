import { AbstractControl, AbstractControlOptions} from "@angular/forms";

/**
 *
 * Custom password format validators
 *
 * Password should have a minimum length assigned, defaults to 6
 * Password should have at least one capital letter
 * Password should contain at least one capital letter
 *
 * If all the rules pass, null will be returned which means the input is valid against
 * the rules that it was suggested to
 *
 * If not an object is returned with a string key to indicate what has failed. This could be very useful
 * when creating specific error messages
 */
export const PasswordValidator = ( minlength = 6 ) => {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if ( !!control.value ) {
      const _control = control.value;

      // check password length
      if ( _control.length < minlength) {
        return { 'short': true };
      }

      // does it contain at least one capital letter
      if ( !(_control.match(/[A-Z]/g)) ) {
        return { 'no-capital': true };
      }

      // does it contain at least one number
      if (!(_control.match(/[0-9]/g))) {
        return { 'no-digit': true };
      }

    }
    return null;
  };

}
