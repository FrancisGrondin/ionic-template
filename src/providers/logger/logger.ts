import { Injectable } from '@angular/core';

/**
 * Class-interface for the logging service
 */
export abstract class LoggingService {
  /**
   * Logs a debug message
   */
  public abstract debug(message: string, error?: Error);

  /**
   * Logs an info message
   */
  public abstract info(message: string, error?: Error);

  /**
   * Logs an warning message
   */
  public abstract warn(message: string, error?: Error);

  /**
   * Logs an error message
   */
  public abstract error(message: string, error?: Error);

  /**
   * Logs an fatal message
   */
  public abstract fatal(message: string, error?: Error);

}

export enum LoggingLevel {
  Debug = 'Debug',
  Info = 'Info',
  Warn = 'Warn',
  Error = 'Error',
  Fatal = 'Fatal'
}

@Injectable()
export class Logger implements LoggingService {

  constructor() {
  }

  public debug(message: string, error?: Error) {
    console.debug([message, error].filter(x => !!x));
  }

  public info(message: string, error?: Error) {
    console.info([message, error].filter(x => !!x));
  }

  public warn(message: string, error?: Error) {
    console.warn([message, error].filter(x => !!x));
  }

  public error(message: string, error?: Error) {
    console.error([message, error].filter(x => !!x));
  }

  public fatal(message: string, error?: Error) {
    console.error([message, error].filter(x => !!x));
  }
}


