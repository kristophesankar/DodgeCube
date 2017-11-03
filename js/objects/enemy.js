import {Cube} from './Cube.js';

var Enemy = class Enemy extends Cube{
  constructor() {
    super();
    this.height = 5;
    this.width = 5;
    this.posx = 140;
    this.posy = 0;

  }
}

export {Enemy};
