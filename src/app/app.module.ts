
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarComponent } from './consultar/consultar.component';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
