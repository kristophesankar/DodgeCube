var Player = function() {
    this.super = new Cube();
};

Player.prototype.moveright = function() {
    this.super.posx = this.super.posx + 200;
};

Player.prototype.moveright = function() {
    this.super.posx = this.super.posx - 20;
};
