import { CadastroModule } from './cadastro/cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'

  },
  {
    path:'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
