import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGuard } from '../core/guards/data.guard';
import { CreatorComponent } from './creator.component';

const routes: Routes = [{ path: '', component: CreatorComponent, canActivate: [DataGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
