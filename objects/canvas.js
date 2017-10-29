var Canvas = function() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    var player = new Player();
    var enemylist = new Array();
    var thisobj = this;
    var controls = new Controls();
    controls.init(player);

    window.setInterval(function() {
        thisobj.clearcanvas();
        thisobj.render(player)

        for (var i = 0; i < 1; i++) {
            var enemy = new Enemy();
            enemy.super.posx = Math.floor(Math.random() * 300)
            enemylist.push(enemy);
        }

        for (var i = 0; i < enemylist.length; i++) {
          if (enemy.super.posy < 100) {

              enemylist[i].super.movedown();
              thisobj.render(enemylist[i])
          }
        }


    }, 16);

}

Canvas.prototype.render = function(player) {
    this.context.fillRect(player.super['posx'], player.super['posy'], player.super['height'], player.super['width']);
};

Canvas.prototype.handleevent = function(player) {
    player.moveright();
};

Canvas.prototype.clearcanvas = function() {
    this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
};
