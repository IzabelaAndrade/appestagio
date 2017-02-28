import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: Array<{title: string ,component: any}> = [];

  rootPage = LoginPage;

  constructor(
    platform: Platform,
    public MenuCtrl: MenuController
  ) {

    this.pages= [
      {title: 'Revisitas', component: HomePage},
      {title: 'Configurações', component: ConfiguracaoPage},
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: {title: string, component: any}): void{
    this.rootPage = page.component;
  }
}
