var Canvas = function() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    var thisobj = this;
    var player = new Player();
    window.setInterval(function() {
        thisobj.render(player)
    }, 1000);

}

Canvas.prototype.render = function(player) {
    this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.context.fillRect(player.super['posx'], player.super['posy'], player.super['height'], player.super['width']);
    player.moveright();
};

Canvas.prototype.clear = function() {
    this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
};
