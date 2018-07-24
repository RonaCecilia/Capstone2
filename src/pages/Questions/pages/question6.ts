import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question7 } from '../pages/question7';

@Component({
  selector: 'question6',
  templateUrl: 'question6.html'
})
export class question6 {

  constructor(public navCtrl: NavController) {

  }

  toQ7(){
  		this.navCtrl.push(question7);  	}
}