import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditBlockComponent} from "./credit-block/credit-block.component";

const routes: Routes = [
  {
    path: '',
    component: CreditBlockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }
