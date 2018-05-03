import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PostePage } from '../poste/poste';
import { InspeccionPage } from '../inspeccion/inspeccion';
/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }
  entrar(caso: string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Acciones',
      buttons: [
        {
          text: 'Realizar Inspeccion',
          handler: () => {
            if (caso == 'poste') {
              this.navCtrl.push(PostePage);
            }
            else if (caso == 'inspeccion') {
              this.navCtrl.push(InspeccionPage);
            }
          }
        }, {
          text: 'Posponer hora',
          handler: () => {
            this.mensaje('se ha pospuesto hasta la proxima hora');
          }
        }, {
          text: 'Posponer dia',
          handler: () => {
            this.mensaje('se ha pospuesto hasta el proximo dia');
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  mensaje(texto: string) {
    let alert = this.alertCtrl.create({
      title: 'Atencion!',
      subTitle: 'La tarea ' + texto,
      buttons: ['OK']
    });
    alert.present();
  }
}
