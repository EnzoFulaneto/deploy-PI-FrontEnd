import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { IndexComponent } from './index/index.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},

  {path: 'cadastrar', component:CadastrarComponent},

  {path: 'index', component: IndexComponent},

  {path: 'sobre-nos', component: SobreNosComponent}

  /*
  {path: 'alimentos', component:AlimentosComponent}
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
