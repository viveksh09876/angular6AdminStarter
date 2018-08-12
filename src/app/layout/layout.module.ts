import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppHeaderComponent } from './header/header.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material-module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    AppHeaderComponent,
    AppSidebarComponent
  ]
})
export class LayoutModule { }
