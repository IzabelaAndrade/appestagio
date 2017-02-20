import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the RecuperarConta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recuperar-conta',
  templateUrl: 'recuperar-conta.html'
})
export class RecuperarContaPage {

  constructor( public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarContaPage');
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'E-mail enviado com sucesso.',
    buttons: ['OK']
  });
  alert.present();
}

}
