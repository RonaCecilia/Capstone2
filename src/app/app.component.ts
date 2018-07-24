import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Menu } from '../pages/menu/menu';
import { Questions } from '../pages/questions/questions';
import { Music } from '../pages/music/music';
import { Alarms } from '../pages/alarms/alarms';
import { Tips } from '../pages/tips/tips';
import { Qmenu } from '../pages/questions/pages/qmenu';
import {question1} from '../pages/questions/pages/question1';
import {question2} from '../pages/questions/pages/question2';
import {question3} from '../pages/questions/pages/question3';
import {question4} from '../pages/questions/pages/question4';
import {question5} from '../pages/questions/pages/question5';
import {question6} from '../pages/questions/pages/question6';
import {question7} from '../pages/questions/pages/question7';
import {question8} from '../pages/questions/pages/question8';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

