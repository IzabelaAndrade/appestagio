import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { RevisitaPage } from '../revisita/revisita';
import { CriarPage } from '../criar/criar';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  revisitas

  	constructor(
      public navCtrl: NavController, 
      public nativeStorage: NativeStorage,
      public platform: Platform,
      public navParams: NavParams ) {}

    ionViewWillEnter(){
      this.nativeStorage.getItem('revisitas').then(data => {
        console.log('DATA: ' + data);
        this.revisitas = data;
      }, error => {
        console.log('ERROR: ' + error);
      });
    }

  	openPage(revisita) {
  //lista de dados do objeto
  //    console.log(Object.keys(revisita));
      this.navCtrl.push(RevisitaPage, revisita);
   }
   openPageCriar() {
      this.navCtrl.push(CriarPage);
   }


}
	




