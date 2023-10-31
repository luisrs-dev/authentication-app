import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from 'src/app/shared/utils/angular-material';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
