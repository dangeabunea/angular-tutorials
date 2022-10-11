import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  readonly blogPostForm: FormGroup;

  constructor(){
    this.blogPostForm = new FormGroup({
      title: new FormControl<string>(''),
      content: new FormControl<string>(''),
      categories: new FormControl<string>('', [CustomValidators.hashTagsWithMaxSize(2)])
    });
  }

  submitForm(){
    console.log(this.blogPostForm);
  }
}
