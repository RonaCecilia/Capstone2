import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question1 } from '../pages/question1';

@Component({
  selector: 'Qmenu',
  templateUrl: 'Qmenu.html'
})
export class Qmenu {

  constructor(public navCtrl: NavController) {

  }

  toQ1(){
  	this.navCtrl.push(question1);
  }
}