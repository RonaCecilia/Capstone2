import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import {Menu } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toLoginPage(){
  	this.navCtrl.push(LoginPage);


  }
  toRegisterPage(){
  	this.navCtrl.push(RegisterPage);
  }

  toMenuPage(){
  	this.navCtrl.push(Menu);
  }

}
