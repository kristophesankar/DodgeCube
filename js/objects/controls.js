var Controls = function() {
    this.moveleftkey = '';
    this.moverightkey = '';
};

Controls.prototype.init = function(player) {
    document.body.onkeydown = function(e) {
        //alert(String.fromCharCode(e.keyCode) + " --> " + e.keyCode);

        if (e.keyCode == 37) {
            player.super.moveleft();
        }

        if (e.keyCode == 39) {
            player.super.moveright();
        }

    };
};
