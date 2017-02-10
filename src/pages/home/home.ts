import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RevisitaPage } from '../revisita/revisita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items = [
    {'id':'1','nome':'Morador1','anotacao':'bslalfdkjfas'},
    {'id':'2','nome':'Morador2','anotacao':'nananananan'},
    {'id':'3','nome':'Morador3','anotacao':'kkkkkkkkkkkk'},
    {'id':'4','nome':'Morador4','anotacao':'jsjsjsjsjsjsjs'}
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  	constructor(public navCtrl: NavController) {}

  	openPage() {
      this.navCtrl.push(RevisitaPage);
   }


}
	




