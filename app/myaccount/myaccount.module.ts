import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyaccountPageRoutingModule } from './myaccount-routing.module';
import { MyaccountPage } from './myaccount.page';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyaccountPageRoutingModule,
    ReactiveFormsModule,
  
  ],
  declarations: [MyaccountPage,HeaderComponent,FooterComponent]
})
export class MyaccountPageModule {}
