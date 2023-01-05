import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorV2Component } from './creator-v2.component';

const routes: Routes = [{ path: '', component: CreatorV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorV2RoutingModule { }
