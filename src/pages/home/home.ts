import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RevisitaPage } from '../revisita/revisita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items = [
    {'nome':'Morador1','anotacao':'bslalfdkjfas'},
    {'nome':'Morador2','anotacao':'bslalfdkjfas'},
    {'nome':'Morador3','anotacao':'bslalfdkjfas'},
    {'nome':'Morador4','anotacao':'bslalfdkjfas'},
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  	constructor(public navCtrl: NavController) {}

  	openPage() {
      this.navCtrl.push(RevisitaPage);
   }


}
	




