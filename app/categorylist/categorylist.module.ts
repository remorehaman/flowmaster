import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorylistPageRoutingModule } from './categorylist-routing.module';

import { CategorylistPage } from './categorylist.page';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { ProductlistPage } from '../productlist/productlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorylistPageRoutingModule
  ],
  declarations: [CategorylistPage, HeaderComponent, FooterComponent, ProductlistPage],
  entryComponents: [HeaderComponent, FooterComponent, ProductlistPage]
})
export class CategorylistPageModule {}
