import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Ok, então a plataforma está pronta e os nossos plugins estão disponíveis.
      // Aqui você pode fazer qualquer coisa nativa de nível superior que você possa precisar.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
