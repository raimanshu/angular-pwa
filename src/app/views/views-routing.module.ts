import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'swe',
    loadChildren: () => import('./service-worker-example/service-worker-example.module').then(m => m.ServiceWorkerExampleModule)
  },

  { path: '',   redirectTo: 'swe', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: IntroComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
