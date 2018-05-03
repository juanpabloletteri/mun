import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the InspeccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspeccion',
  templateUrl: 'inspeccion.html',
})
export class InspeccionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspeccionPage');
  }
  camara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  enviar(){
    let alert = this.alertCtrl.create({
      title: 'Exito!',
      subTitle: 'La inspeccion ha sido reportada exitosamente!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }
}
