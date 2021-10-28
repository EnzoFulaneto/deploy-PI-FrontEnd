import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlimentosComponent } from './categorias/alimentos/alimentos.component';
import { LogadoComponent } from './logado/logado.component';
import { FooterlogadoComponent } from './footerlogado/footerlogado.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EntrarComponent,
    CadastrarComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AlimentosComponent,
    LogadoComponent,
    FooterlogadoComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
   provide:LocationStrategy,
   useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
