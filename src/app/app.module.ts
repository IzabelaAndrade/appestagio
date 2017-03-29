import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { NativeStorage } from '@ionic-native/native-storage';
//import { NgCalendarModule  } from 'ionic2-calendar';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RevisitaPage } from '../pages/revisita/revisita';
import { ConcluidasPage } from '../pages/concluidas/concluidas';
import { InativasPage } from '../pages/inativas/inativas';
import { CriarPage } from '../pages/criar/criar';
import { RecuperarContaPage } from '../pages/recuperar-conta/recuperar-conta';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b13a40fd'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RevisitaPage,
    LoginPage,
    CriarPage,
    RecuperarContaPage,
    ConfiguracaoPage,
    ConcluidasPage,
    InativasPage
  ],
  imports: [
 //   NgCalendarModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RevisitaPage,
    LoginPage,
    CriarPage,
    RecuperarContaPage,
    ConfiguracaoPage,
    ConcluidasPage,
    InativasPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},DatePicker, NativeStorage]
})
export class AppModule {

}
