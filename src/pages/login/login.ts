import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RecuperarContaPage } from '../recuperar-conta/recuperar-conta';
import { CadastroPage } from '../cadastro/cadastro';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage(pagina: string) {
	  	if (pagina == 'Home'){
	      this.navCtrl.push(HomePage);
	  	}
	  	if (pagina == 'RecuperarConta'){
	      this.navCtrl.push(RecuperarContaPage);
	  	}
	  	if (pagina == 'Cadastro'){
	      this.navCtrl.push(CadastroPage);
	  	}
   }
}
