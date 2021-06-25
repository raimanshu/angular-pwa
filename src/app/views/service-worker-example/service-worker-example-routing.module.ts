import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SweIndexComponent } from './swe-index/swe-index.component';

const routes: Routes = [
  {
    path: '',
    component: SweIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceWorkerExampleRoutingModule { }
