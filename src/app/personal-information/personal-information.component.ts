import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  personalInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['aasdf'],
    });
  }

  submitForm() {
    const formValue = this.personalInfoForm.getRawValue();
    alert(formValue);
  }
}
