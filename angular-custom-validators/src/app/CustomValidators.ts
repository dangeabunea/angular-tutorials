import { AbstractControl, ValidatorFn } from '@angular/forms';

/*
The hashtag validators are not perfect. They can be improved to cover more
edge cases, but that is not the purpose of the demo.
*/
export class CustomValidators {
  static hashTags(control: AbstractControl): { [key: string]: any } {
    if (control.value) {
      // Grab all categories by spliting them after ;
      const categories = control.value.split(';');

      // Check that each category starts with #
      for (let c of categories) {
        if (c && !c.startsWith('#')) {
          return {
            invalidHashTag: true,
          };
        }
      }

      // Validation passed; To signal this we need to return null
      return null;
    }
  }

  static hashTagsWithMaxSize(maxSize: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        // Grab all categories by spliting them after ;
        const categories = control.value.split(';');

        // Check that each category starts with #
        for (let c of categories) {
          if (c && !c.startsWith('#')) {
            return {
              invalidHashTag: true,
            };
          }
        }

        // Check if max nb exceeded
        if (categories.length > maxSize) {
          return {
            nbHashTagsExceeded: true,
          };
        }

        // Validation passed; To signal this we need to return null
        return null;
      }
    };
  }
}
