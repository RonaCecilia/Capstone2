import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Menu } from '../pages/menu/menu';
import { Questions } from '../pages/questions/questions';
import { Music } from '../pages/music/music';
import { Alarms } from '../pages/alarms/alarms';
import { RegisterPageModule } from '../pages/register/register.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { DatabaseProvider } from '../providers/database/database';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpClientModule } from '@angular/common/http'; 
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage, 
    Menu,
    Questions,
    Music,
    Alarms,
    Tips,
    Qmenu,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8
  ],
  imports: [
    BrowserModule,
    RegisterPageModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Menu,
    Questions,
    Music,
    Alarms, 
    Tips,
    Qmenu,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8
  ],
  providers: [
    StatusBar,
    HttpClientModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    AuthServiceProvider
  ]
})
export class AppModule {}

