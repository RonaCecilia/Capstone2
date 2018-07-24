import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question3 } from '../pages/question3';

@Component({
  selector: 'question2',
  templateUrl: 'question2.html'
})
export class question2 {

  constructor(public navCtrl: NavController) {

  }

  toQ3(){
  		this.navCtrl.push(question3);  	}
}