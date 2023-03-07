import { ButtonModule } from 'primeng/button';
import { ConsultarComponent } from './consultar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { ConsultarRoutingModule } from './consultar-routing.module';
import {DialogModule} from 'primeng/dialog';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [ConsultarComponent],
  imports: [
    CommonModule,
    ConsultarRoutingModule,

    TableModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputMaskModule,
    InputTextModule

  ]
})
export class ConsultarModule { }
