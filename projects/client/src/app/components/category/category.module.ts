import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
