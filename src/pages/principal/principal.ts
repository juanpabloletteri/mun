import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { NovedadesPage } from '../novedades/novedades';
import { TelefonosPage } from '../telefonos/telefonos';
import { OtrosPage } from '../otros/otros';
/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  lista() {
    this.navCtrl.push(ListaPage);
  }
  novedades() {
    this.navCtrl.push(NovedadesPage);
  }
  telefonos() {
    this.navCtrl.push(TelefonosPage);
  }
  otros() {
    this.navCtrl.push(OtrosPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
