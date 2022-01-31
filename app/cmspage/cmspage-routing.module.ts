import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmspagePage } from './cmspage.page';

const routes: Routes = [
  {
    path: '',
    component: CmspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmspagePageRoutingModule {}
