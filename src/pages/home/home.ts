import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal'

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
    if (this.usuario == "1" && this.password == "1") {
      this.navCtrl.push(PrincipalPage);
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
