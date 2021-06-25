import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  {
    path: 'views',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path:'intro', component: IntroComponent
  },
  {
    path:'reference', component: ReferencesComponent
  },
  { path: '',   redirectTo: 'intro', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: IntroComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
