import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { question4 } from '../pages/question4';

@Component({
  selector: 'question3',
  templateUrl: 'question3.html'
})
export class question3 {

  constructor(public navCtrl: NavController) {

  }

  toQ4(){
  		this.navCtrl.push(question4);  
  	}
}