
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,

    FormsModule,
    CardModule,
    ButtonModule,
    FileUploadModule,
    RadioButtonModule,
    InputTextModule,
    MessagesModule,
    CheckboxModule,
    TableModule,
    ToastModule,
    InputMaskModule,

  ]
})
export class CadastroModule { }
