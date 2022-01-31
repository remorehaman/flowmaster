import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressbookPageRoutingModule } from './addressbook-routing.module';

import { AddressbookPage } from './addressbook.page';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressbookPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AddressbookPage,HeaderComponent,FooterComponent]
})
export class AddressbookPageModule {}
