import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { Calendar, Geolocation} from 'ionic-native';
import { NativeStorage } from '@ionic-native/native-storage';
import { DatePicker } from '@ionic-native/date-picker';


import { HomePage } from '../home/home';
/*
  Generated class for the Criar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-criar',
  templateUrl: 'criar.html'


})
export class CriarPage {

  revisitas

  public chats: Array<string>;

  public event = {
     month: '2017-03-23'
  }

  @ViewChild('map') mapElement;
  map: any;

  public startDate: Date;

   nome
   info
   lati
   long

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public platform: Platform,
              public datePicker: DatePicker,
              public nativeStorage: NativeStorage,
              public alertCtrl: AlertController) {}



  saveRevisita(){

    this.revisitas = [{
      'nome': this.nome,
      'info': this.info,
      'data': this.event.month,
      'la': this.lati,
      'ln': this.long,
      'status': false
    }]

    this.nativeStorage.setItem('revisitas', this.revisitas).then(() => {
      console.log('Stored item!')
    }, error => {
      console.error('Error storing item', error)
    });

    this.backPage();
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){

    this.platform.ready().then(() => {

        Geolocation.getCurrentPosition().then((data) => {
            console.log('My latitude : ', data.coords.latitude);
            console.log('My longitude: ', data.coords.longitude);
            var lat= data.coords.latitude;
            var lng= data.coords.longitude;
  
    console.log(lat);
    console.log(lng);
    let LatLng = new google.maps.LatLng(lat, lng);
//    let ionic: LatLng = new google.maps.LatLng(lat, lng);
    let mapOptions = {
      center: LatLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      });
    });

    /* CRIANDO UMA MARCAÇÃO *****************************************************/

  
  /****************************************************************************/
  }



  selectDate(){
    Calendar.createCalendar("MyCalendar").then(
      (msg) => { console.log("MENSAGEM: "+ msg); },
      (err) => { console.log("ERRO: " + err); }
    );

    Calendar.openCalendar(this.startDate)
  }

   saveGeolocation(){
    Geolocation.getCurrentPosition().then((resp) => {
      this.lati = resp.coords.latitude
      this.long = resp.coords.longitude

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = Geolocation.watchPosition();
    watch.subscribe((data) => {

    });

    let alert = this.alertCtrl.create({
          title: 'Localização salva',
          buttons: ['OK']
     });
     alert.present();
  }


  openDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

   backPage(){
      this.navCtrl.pop(HomePage);
    }
}
