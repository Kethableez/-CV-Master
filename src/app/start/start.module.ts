import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartComponent,
    DataFormComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    ReactiveFormsModule
  ]
})
export class StartModule { }
