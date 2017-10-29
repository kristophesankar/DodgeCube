var Player = function() {
    this.super = new Cube();

};

Player.prototype.render = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.rect(20, 20, this.super['height'], this.super['width']);
    context.stroke();
};
