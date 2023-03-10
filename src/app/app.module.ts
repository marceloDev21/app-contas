import { CadastroModule } from './cadastro/cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';

import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
