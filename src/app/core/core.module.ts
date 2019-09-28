import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/script';
import { HeadComponent } from '@app/components/head/script';
import { TitleComponent } from '@app/components/title/script';
import { CardColorComponent } from '@app/components/card-color/script';
import { NavigationComponent } from '@app/components/navigation/script';
import { CopyConfirmComponent } from '@app/components/copy-confirm/script';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
    HeadComponent,
    TitleComponent,
    CardColorComponent,
    NavigationComponent,
    CopyConfirmComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  entryComponents: [
    CopyConfirmComponent
  ]
})
export class CoreModule { }
