import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { ListaPage } from '../pages/lista/lista';
import { NovedadesPage } from '../pages/novedades/novedades';
import { TelefonosPage } from '../pages/telefonos/telefonos';
import { OtrosPage } from '../pages/otros/otros';
import { PostePage } from '../pages/poste/poste';
import { InspeccionPage } from '../pages/inspeccion/inspeccion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PrincipalPage,
    ListaPage,
    NovedadesPage,
    TelefonosPage,
    OtrosPage,
    PostePage,
    InspeccionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PrincipalPage,
    ListaPage,
    NovedadesPage,
    TelefonosPage,
    OtrosPage,
    PostePage,
    InspeccionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
