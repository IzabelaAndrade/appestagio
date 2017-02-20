import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RevisitaPage } from '../pages/revisita/revisita';
import { CriarPage } from '../pages/criar/criar';
import { RecuperarContaPage } from '../pages/recuperar-conta/recuperar-conta';
import { CadastroPage } from '../pages/cadastro/cadastro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RevisitaPage,
    LoginPage,
    CriarPage,
    RecuperarContaPage,
    CadastroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RevisitaPage,
    LoginPage,
    CriarPage,
    RecuperarContaPage,
    CadastroPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

}
