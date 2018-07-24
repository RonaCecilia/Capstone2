import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Music } from '../music/music';
import { Alarms } from '../alarms/alarms';
import { Tips } from '../tips/tips';
import { Qmenu } from '../questions/pages/qmenu';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class Menu {

  constructor(public navCtrl: NavController) {

  }

  toQuestions(){
  	this.navCtrl.push(Qmenu);

  }

  toMusic(){
  	this.navCtrl.push(Music);
  }

  toAlarms(){
  	this.navCtrl.push(Alarms);
  }

  toTips(){
    this.navCtrl.push(Tips);
  }

}
