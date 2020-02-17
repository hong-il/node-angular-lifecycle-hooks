import { OnInit } from '@angular/core';
import { LoggerService }    from './logger.service';

let nextId = 1;

export class PeekABoo implements OnInit {
  constructor(private logger: LoggerService) { }

  ngOnInit() { this.logIt(`OnInit`); }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}