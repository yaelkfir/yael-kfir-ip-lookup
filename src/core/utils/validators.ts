import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { validateIp } from "./validate-ip";

export class AppValidators {
  static ipValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors | null  => { 
    const value = formControl.value.trim();
    return validateIp(value) ? null : { message: 'invalid ip' };
  }
}