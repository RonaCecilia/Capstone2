import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question6 } from '../pages/question6';

@Component({
  selector: 'question6',
  templateUrl: 'question6.html'
})
export class question5 {

  constructor(public navCtrl: NavController) {

  }

  toQ6(){
  		this.navCtrl.push(question6);  	}
}