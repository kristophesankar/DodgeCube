var Controls = class Controls {

  constructor() {
    this.moveleftkey = '';
    this.moverightkey = '';

  }

  init(player) {
    document.body.onkeydown = function(e) {
      //alert(String.fromCharCode(e.keyCode) + " --> " + e.keyCode);

      if (e.keyCode == 37) {
        player.moveleft();
      }

      if (e.keyCode == 39) {
        player.moveright();
      }

    };
  }

}

export {Controls};
