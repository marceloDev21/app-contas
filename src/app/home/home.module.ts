import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CaptchaModule} from 'primeng/captcha';
import { HomeRoutingModule } from './home-routing.module';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    CaptchaModule,
    ToastModule,
    ButtonModule
  ]
})
export class HomeModule { }
