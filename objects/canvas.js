var Canvas = function() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    var player = new Player();
    var thisobj = this;
    var controls = new Controls();
    controls.init(player);

    window.setInterval(function() {
        thisobj.render(player)
    }, 16);
}

Canvas.prototype.render = function(player) {
    this.clearcanvas();
    this.context.fillRect(player.super['posx'], player.super['posy'], player.super['height'], player.super['width']);
    //player.moveright();
};

Canvas.prototype.handleevent = function(player) {
    player.moveright();
};

Canvas.prototype.clearcanvas = function() {
    this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
};
