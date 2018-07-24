import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question8 } from '../pages/question8';

@Component({
  selector: 'question7',
  templateUrl: 'question7.html'
})
export class question7 {

  constructor(public navCtrl: NavController) {

  }

  toQ8(){
  		this.navCtrl.push(question8);  	}
}