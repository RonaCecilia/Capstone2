import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question2 } from '../pages/question2'

@Component({
  selector: 'question1',
  templateUrl: 'question1.html'
})
export class question1 {

  constructor(public navCtrl: NavController) {	

  }
  toQ2(){
  		this.navCtrl.push(question2);
  	}
}