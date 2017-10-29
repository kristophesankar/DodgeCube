var Player = function() {
    this.super = new Cube();
};

Player.prototype.moveright = function() {
    this.super.posx = this.super.posx + 20;
};

Player.prototype.moveleft = function() {
    this.super.posx = this.super.posx - 20;
};

Player.prototype.moveup = function() {
    this.super.posy = this.super.posy - 20;
};

Player.prototype.movedown = function() {
    this.super.posy = this.super.posy + 20;
};
