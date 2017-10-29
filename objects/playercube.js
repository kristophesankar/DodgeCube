var Player = function() {
    this.super = new Cube();
};

Player.prototype.moveright = function() {
    this.super.posx = this.super.posx + 20;
};

Player.prototype.moveleft = function() {
    this.super.posx = this.super.posx - 20;
};
