import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressUpdatePageRoutingModule } from './address-update-routing.module';

import { AddressUpdatePage } from './address-update.page';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressUpdatePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddressUpdatePage,HeaderComponent,FooterComponent]
})
export class AddressUpdatePageModule {}
