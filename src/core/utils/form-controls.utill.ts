import { FormControl } from "@angular/forms";
import { AppValidators } from "./validators";

export class FormControlsUtil {
    static ipControl = (value: string, config?: any) => new FormControl(value || '', {
       validators: [AppValidators.ipValidator].concat(config?.validators || []),
       updateOn: config?.updateOn || 'change'
    }) as FormControl<string>;
}