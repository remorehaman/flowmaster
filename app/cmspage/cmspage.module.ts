import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmspagePageRoutingModule } from './cmspage-routing.module';

import { CmspagePage } from './cmspage.page';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmspagePageRoutingModule
  ],
  declarations: [CmspagePage,HeaderComponent,FooterComponent]
})
export class CmspagePageModule {}
