import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question5 } from '../pages/question5';

@Component({
  selector: 'question4',
  templateUrl: 'question4.html'
})
export class question4 {

  constructor(public navCtrl: NavController) {

  }

  toQ5(){
  		this.navCtrl.push(question5);  	}
}