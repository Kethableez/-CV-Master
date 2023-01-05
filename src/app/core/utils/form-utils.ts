import { FormControl } from '@angular/forms';

export class FormUtils {
  static state(fc: FormControl) {
    if (fc.touched) {
      if (fc.valid) return 'is-valid';
      else if (fc.invalid) return 'is-invalid';
      else return '';
    } else return '';
  }
}
