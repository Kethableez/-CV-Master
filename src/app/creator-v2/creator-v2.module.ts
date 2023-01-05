import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorV2RoutingModule } from './creator-v2-routing.module';
import { CreatorV2Component } from './creator-v2.component';
import { CreatorToolsComponent } from './components/creator-tools/creator-tools.component';
import { CvViewComponent } from './components/cv-view/cv-view.component';
import { NgbAccordion, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseInfoFormComponent } from './components/creator-tools/components/base-info-form/base-info-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatorV2Component,
    CreatorToolsComponent,
    CvViewComponent,
    BaseInfoFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CreatorV2RoutingModule,
    NgbAccordionModule
  ]
})
export class CreatorV2Module { }
