import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Logger } from '../providers/logger/logger';
import { StorageProvider } from '../providers/storage/storage';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http, HttpModule } from '@angular/http';
import { Page1 } from '../pages/page1/page1';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [Http]
      }
    }),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Logger,
    StorageProvider,
    TranslateService
  ]
})
export class AppModule { }
