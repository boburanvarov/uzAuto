import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreditRoutingModule} from './credit-routing.module';
import {CreditBlockComponent} from './credit-block/credit-block.component';
import {SharedModule} from "../shared/shared.module";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    CreditBlockComponent,

  ],
  imports: [
    CommonModule,
    CreditRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class CreditModule {
}
