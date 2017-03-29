import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';

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

  email:string = ''
  resetCode
  newPassword:string = ''
  showRecoveryPassword:boolean = true;

  constructor( 
    public alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:Auth, 
    public user: User) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarContaPage');
  }

  sendEmail(){
    if(this.email === '') {
      let alert = this.alertCtrl.create({
        title:'Informar o E-mail', 
        buttons:['OK']
      });
      alert.present();
      return;
    }
    this.showRecoveryPassword = false;
    if(!this.showRecoveryPassword) {
      this.auth.requestPasswordReset(this.email);
      this.passwordAlert();    
    } 
  }
  

  alterPassword(){
    this.auth.confirmPasswordReset(this.resetCode, this.newPassword);
    this.presentAlert();
    this.backPage();
  }
  
  backPage(){
    this.navCtrl.pop(LoginPage);
  }

  passwordAlert() {
    let passalert = this.alertCtrl.create({
      title: 'Um E-mail foi enviado, aguarde o recebimento.',
      buttons: ['OK']
    });
    passalert.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Senha alterada com sucesso.',
      buttons: ['OK']
    });
    alert.present();
  }

}
