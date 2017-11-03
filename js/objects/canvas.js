import {Player} from './playercube.js';
import {Controls} from './controls.js';
import {Enemy} from './enemy.js';

var Canvas = class Canvas {
  constructor (){
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
        enemy.posx = Math.floor(Math.random() * 300)
        enemylist.push(enemy);
      }

      for (var i = 0; i < enemylist.length; i++) {
        if (enemy.posy < 100) {

          enemylist[i].movedown();
          thisobj.render(enemylist[i])
        }
      }


    }, 16);

  };

  render(player) {
    this.context.fillRect(player['posx'], player['posy'], player['height'], player['width']);
  };

  handleevent(player) {
    player.moveright();
  };

  clearcanvas() {
    this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
  };

}


export {Canvas};
