import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/script';
import { HeadComponent } from '@app/components/head/script';
import { TitleComponent } from '@app/components/title/script';
import { CardColorComponent } from '@app/components/card-color/script';
import { NavigationComponent } from '@app/components/navigation/script';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
    HeadComponent,
    TitleComponent,
    CardColorComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ]
})
export class CoreModule { }
