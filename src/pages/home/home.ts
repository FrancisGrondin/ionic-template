import { Component } from '@angular/core';
import { Logger } from '../../providers/logger/logger';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private log: Logger) {

  }


  public clickFct(){
    this.log.debug("hey test")
    this.log.fatal("wtf")
  }
}
