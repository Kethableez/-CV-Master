import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormUtils } from 'src/app/core/utils/form-utils';

@Component({
  selector: 'ktbz-base-info-form',
  templateUrl: './base-info-form.component.html',
  styleUrls: ['./base-info-form.component.scss'],
})
export class BaseInfoFormComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  formUtils = FormUtils;

  linkTypes = [
    'github', 'twitter', 'youtube', 'linkedin', 'personal', 'other'
  ]

  phoneForm = this.builder.nonNullable.group({
    dialingCode: ['Select dialing code', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  baseInfoForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    jobTitle: ['', Validators.required],
    birthdate: ['', Validators.required],
    email: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    phone: this.phoneForm,
    links: this.builder.nonNullable.array([]),
  });

  ngOnInit(): void {}

  get links() {
    return this.baseInfoForm.get('links') as FormArray;
  }

  addLink() {
    // const link = new FormGroup([
    //   new FormControl('type', Validators.required),
    //   new FormControl('link', Validators.required),
    // ]);
    const link = this.builder.nonNullable.group({
      type: '',
      url: ''
    })
    this.links.push(link);
  }
  removeLink(index: number) {
    this.links.removeAt(index);
  }
}
