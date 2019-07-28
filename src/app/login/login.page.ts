import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User;

  constructor(public navCtrl: NavController,
    private fAuth: AngularFireAuth,private fb: Facebook, public toastController: ToastController) { 
    this.user = new User();

    }

  ngOnInit() {
  }

  async loginWithFacebook() {
    const permissions = ['public_profile', 'user_friends', 'email'];
    this.fb.login(permissions)
  .then((res: FacebookLoginResponse) => {
    let userId = res.authResponse.userID;
    this.presentToast(`id de usuario ${userId}`);
			//Getting name and gender properties
			this.fb.api("/me?fields=name,email", permissions).then(
        user => {
          this.presentToast(`nombre ${user.name}  email ${user.email}`);

        }, err => { this.presentToast(`Error al cargar`);}

      )



  })
  .catch(e =>  this.presentToast(`Error al cargar ${e}`));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);

  }


  public logOutFacebook() {
    this.fb.logout().then(res =>{
			//user logged out so we will remove him from the NativeStorage
      this.presentToast(`Cerro sesion`);

		}, error =>{
      this.presentToast(`Error Cerro sesion`);
		});
  }

  async presentToast(m:string) {
    const toast = await this.toastController.create({
      message: m,
      duration: 3000
    });
    toast.present();
  }

}
