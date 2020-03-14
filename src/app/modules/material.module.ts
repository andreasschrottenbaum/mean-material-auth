import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
