import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Qmenu } from '../pages/qmenu';

@Component({
  selector: 'question2',
  templateUrl: 'question2.html'
})
export class question8 {

  constructor(public navCtrl: NavController) {

  }

  toQmenu(){
  		this.navCtrl.push(Qmenu);  	}
}