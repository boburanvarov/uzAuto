import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractBlockComponent } from './contract-block/contract-block.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzRadioModule} from "ng-zorro-antd/radio";


@NgModule({
  declarations: [
    ContractBlockComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzAutocompleteModule,
    NzInputModule,
    FormsModule,
    NzDropDownModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzRadioModule
  ]
})
export class ContractModule { }
