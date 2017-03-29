import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { HomePage } from '../home/home';
import { RecuperarContaPage } from '../recuperar-conta/recuperar-conta';

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

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public auth:Auth, 
              public user: User,
              public alertCtrl: AlertController,
              public loadingCtrl:LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  doLogin() {
    if(this.showLogin) {
      console.log('login Ok');

      if(this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title:'Erro ao acessar', 
          subTitle:'Preencha os campos',
          buttons:['OK']
        });
        alert.present();
        return;
      } 
      let loader = this.loadingCtrl.create({
        content: "Carregando ..."
      });
      loader.present();
      
      this.auth.login('basic', {'email':this.email, 'password':this.password}).then(() => {
        console.log('ok');
        loader.dismissAll();
        this.navCtrl.setRoot(HomePage);                
      }, (err) => {
        loader.dismissAll();
        console.log(err.message);

        let errors = '';
        if(err.message === 'UNPROCESSABLE ENTITY') errors += 'O e-mail não é válido<br/>';
        if(err.message === 'UNAUTHORIZED') errors += 'É necessário informar a Senha.<br/>';

        let alert = this.alertCtrl.create({
          title:'Verifique o e-mail e senha informados', 
          subTitle:errors,
          buttons:['OK']
        });
        alert.present();
      });
    } else {
      this.showLogin = true;
    }
  }

/* CADASTRO ************************************************************************/


  doRegister() {
    if(!this.showLogin) {
      console.log('registrado');

      /*
      do our own initial validation
      */
      if(this.name === '' || this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title:'Erro ao se cadastrar', 
          subTitle:'Todos os campos são obrigatórios',
          buttons:['OK']
        });
        alert.present();
        return;
      }

      let details: UserDetails = {'email':this.email, 'password':this.password, 'name':this.name};
      console.log(details);
      
      let loader = this.loadingCtrl.create({
        content: "Criando sua conta..."
      });
      loader.present();

      this.auth.signup(details).then(() => {
        console.log('ok');
        this.auth.login('basic', {'email':details.email, 'password':details.password}).then(() => {
          loader.dismissAll();
          this.navCtrl.setRoot(HomePage);
        });

      }, (err:IDetailedError<string[]>) => {
        loader.dismissAll();
        let errors = '';
        for(let e of err.details) {
          console.log(e);
          if(e === 'required_email') errors += 'Informar o e-mail.<br/>';
          if(e === 'required_password') errors += 'Informar a senha.<br/>';
          if(e === 'conflict_email') errors += 'Já existe um usuário com este e-mail.<br/>';
          //don't need to worry about conflict_username
          if(e === 'invalid_email') errors += 'O e-mail informado não é válido.';
        }
        let alert = this.alertCtrl.create({
          title:'Erro ao se cadastrar', 
          subTitle:errors,
          buttons:['OK']
        });
        alert.present();
      });
     
    } else {
      this.showLogin = false;
    }
}

  recoveryPassword() {
	  this.navCtrl.push(RecuperarContaPage);
  }
}
