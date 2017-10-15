import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class MaterialModule {}