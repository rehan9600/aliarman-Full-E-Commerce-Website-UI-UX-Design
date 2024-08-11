import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    SharedModule,
    MatChipsModule

  ]
})
export class PagesModule { }
