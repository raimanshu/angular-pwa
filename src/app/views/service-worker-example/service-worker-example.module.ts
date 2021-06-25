import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceWorkerExampleRoutingModule } from './service-worker-example-routing.module';
import { SweIndexComponent } from './swe-index/swe-index.component';
import { HeaderComponent } from './header/header.component';
import { ActionSequence } from 'protractor';
import { ActionComponent } from './action/action.component';
import { UpdatesNotificationComponent } from './updates-notification/updates-notification.component';


@NgModule({
  declarations: [SweIndexComponent, HeaderComponent, ActionComponent, UpdatesNotificationComponent],
  imports: [
    CommonModule,
    ServiceWorkerExampleRoutingModule
  ]
})
export class ServiceWorkerExampleModule { }
