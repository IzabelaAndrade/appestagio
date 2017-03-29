import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { HomePage } from '../home/home';

/*
  Generated class for the Revisita page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-revisita',
  templateUrl: 'revisita.html'

})
export class RevisitaPage {

	revisita

	public chats: Array<string>;

	@ViewChild('map') mapElement;
  	map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.revisita = this.navParams.data;
 
    console.log(Object.keys(this.navParams.data));

	}


	
  	ionViewDidLoad() {
    	this.initMap();
  	}	

	initMap(){
		console.log(this.revisita.la);  
		console.log(this.revisita.ln);
	    let LatLng = new google.maps.LatLng(this.revisita.la, this.revisita.ln);
	    let mapOptions = {
	      center: LatLng,
	      zoom: 18,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }

	    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	 }
	
}

