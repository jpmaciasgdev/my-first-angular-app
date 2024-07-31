import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ProductListComponent
  ]
})
export class ProductsModule { }
