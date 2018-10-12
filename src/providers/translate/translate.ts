import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

interface System {
  import(request: string): Promise<any>;
}

@Injectable()
export class TranslateProvider implements TranslateLoader {
  public System: System;

  getTranslation(lang: string): Observable<any> {
    return Observable.fromPromise(this.System.import(`../assets/i18n/${lang}.json`));
  }
}

