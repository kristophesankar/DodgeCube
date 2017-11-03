var Cube = class Cube {

  constructor() {
    this.height = 20;
    this.width = 20;
    this.posx = 140;
    this.posy = 260;

  }

  moveright() {
    this.posx = this.posx + 20;
  };

  moveleft() {
    this.posx = this.posx - 20;
  };

  moveup() {
    this.posy = this.posy - 1;
  };

  movedown() {
    this.posy = this.posy + 1;
  };

}

export {Cube};
