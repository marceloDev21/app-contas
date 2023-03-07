import { ConsultarService } from './../consultar/consultar.service';
import { HomeService } from './../home/home.service';
import { CadastroService } from './../cadastro/cadastro/cadastro.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  /*
  Componentes globais, como o menu, vão no declarations e no exports.
  */
  exports: [
    // MenuComponent,
  ],
   /*
   Todas as service dos componentes vão no providers.
   */
  providers: [
   CadastroService,
   HomeService,
   ConsultarService

  ]
})
export class CoreModule { }
