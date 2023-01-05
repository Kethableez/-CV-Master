import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MetaData } from 'src/app/core/models/meta-data.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'ktbz-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  ccVisible = false;

  constructor(
    private builder: FormBuilder,
    private dataService: DataService
  ) { }

  dataForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    jobTitle: ['', Validators.required],
    consent: [''],
    lang: ['', Validators.required],
    customConsent: ['']
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const payload = {
      ...this.dataForm.value,
      consent: this.dataForm.controls.consent.value ? this.dataForm.controls.customConsent.value : 'Default consent'
    }

    delete payload.customConsent;

    console.log(payload)
    this.dataService.saveData(payload as MetaData)
  }

}
