var Cube = function(){
  this.height = 20;
  this.width = 20;
  this.posx = 20;
  this.posy = 20;
};

Cube.prototype.moveright = function() {
    this.posx = this.posx + 20;
};

Cube.prototype.moveleft = function() {
    this.posx = this.posx - 20;
};

Cube.prototype.moveup = function() {
    this.posy = this.posy - 20;
};

Cube.prototype.movedown = function() {
    this.posy = this.posy + 20;
};
