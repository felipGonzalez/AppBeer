import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth"
import { Facebook } from '@ionic-native/facebook/ngx';


var CREDENTIALS = {
  apiKey: "AIzaSyC__BXceODCuIg3grXe2vOKuCjwjPzRpbQ",
  authDomain: "appbeer-56c9c.firebaseapp.com",
  databaseURL: "https://appbeer-56c9c.firebaseio.com",
  projectId: "appbeer-56c9c",
  storageBucket: "",
  messagingSenderId: "56945036629",
  appId: "1:56945036629:web:398a58e5cb19d6b1"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,    
    AngularFireAuthModule,
    AngularFireModule.initializeApp(CREDENTIALS)
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
