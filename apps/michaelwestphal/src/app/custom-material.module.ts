import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatRippleModule,
  MatExpansionModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
    DragDropModule,
    TextFieldModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
    DragDropModule,
    TextFieldModule
  ]
})
export class CustomMaterialModule {}
