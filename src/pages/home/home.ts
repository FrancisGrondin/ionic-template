import { Component } from '@angular/core';
import { Logger } from '../../providers/logger/logger';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private language: string;
  private otherLanguage: string;

  constructor(private log: Logger, private translate: TranslateService) {
    this.language = this.translate.currentLang;
    this.otherLanguage = this.translate.langs.filter(x => x != this.language)[0];
  }

  private async switchLanguage(): Promise<void> {
    await this.translate.use(this.otherLanguage).toPromise();
    this.language = this.translate.currentLang;
    this.log.debug(`Current language: ${this.language}`);

    this.otherLanguage = this.translate.langs.filter(x => x != this.language)[0];
  }
}
