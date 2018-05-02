import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: string;
  password: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }
  ingresar() {
    if (this.usuario == "1" && this.usuario == "1") {
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1500
      });
      loader.present();
      this.navCtrl.push(LoginPage);
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Usuario o contraseña incorrecta',
        buttons: ['OK']
      });
      alert.present();
    }

  }
}
