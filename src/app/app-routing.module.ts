import { HomeModule } from './home/home.module';
import { CadastroModule } from './cadastro/cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path:'cadastro',
    loadChildren: () => CadastroModule
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
