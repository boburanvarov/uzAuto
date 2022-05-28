import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractBlockComponent } from './contract-block/contract-block.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    ContractBlockComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class ContractModule { }
