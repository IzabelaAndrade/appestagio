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

/*  openPage(pagina) {
	  	if (pagina = HomePage){
	      this.navCtrl.push(HomePage);
	  	}
	  	if (pagina = RecuperarContaPage){
	      this.navCtrl.push(RecuperarContaPage);
	  	}
	  	if (pagina = CadastroPage){
	      this.navCtrl.push(CadastroPage);
	  	}
   }*/

   openPageHome() {
	    this.navCtrl.push(HomePage);
	}
	openPageRecuperarConta() {
	    this.navCtrl.push(RecuperarContaPage);
	}
	openPageCadastro() {
	    this.navCtrl.push(CadastroPage);
	}

}
