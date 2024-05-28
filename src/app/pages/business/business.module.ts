import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BusinessRoutingModule } from './business-routing.module';
import { ProductComponent } from './product/product.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { PaginationModule } from 'src/app/layout/pagination/pagination.module';

@NgModule({
  imports: [CommonModule, BusinessRoutingModule, PaginationModule],
  declarations: [ProductComponent, WarehouseComponent],
})
export class BusinessModule {}
