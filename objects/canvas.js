var Canvas = function(){
  this.canvas = document.getElementById("canvas");
  this.context = canvas.getContext("2d");
  this.player = new Player();
}

Canvas.prototype.render = function (object) {
  this.context.rect(object.super['posx'],object.super['posy'], object.super['height'], object.super['height']);
  this.context.stroke();

};

Canvas.prototype.init = function () {
  this.render(this.player);
  this.clear();
  this.player.moveright()
  setTimeout(this.render(this.player), 10000);


};

Canvas.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
