import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractBlockComponent} from "./contract-block/contract-block.component";

const routes: Routes = [
  {
    path: '', component: ContractBlockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
