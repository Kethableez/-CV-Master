import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator.component';
import { A4ViewComponent } from './a4-view/a4-view.component';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { ContentComponent } from './components/content/content.component';
import { AddButtonComponent } from './components/add-button/add-button.component';


@NgModule({
  declarations: [
    CreatorComponent,
    A4ViewComponent,
    ContentItemComponent,
    ContentComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule { }
