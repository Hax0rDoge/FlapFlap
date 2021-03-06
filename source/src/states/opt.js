var opt_state = {

	create: function () {        
        this.background = this.game.add.sprite(0, 0, 'background');
        this.background.width = game.width;
        this.background.height = game.world.height - 32;
        
        this.ground = this.game.add.sprite(0, game.world.height - 32, 'ground');
        this.ground.width = game.world.width + 150;
        this.ground.body.velocity.x -= speed;
        this.background.height = game.world.height - 32;
        
        var x = game.world.width/2
        
        // vars
        var style = { font: "16px Arial", fill: "#fff" };
        
        var text = this.game.add.text(10, 10, "A Special thanks to the following\nReddit users for the themes:\n\n    cheeyoon\n\n    SadPandaTerrabang\n\n    Appelf\n\nand a special thanks to\nNoCopyrightSounds for the\nbackground music!\n\nThank You\nThis project would not of been\npossible without you!", style);
        
        this.name = this.game.add.button(x, game.world.width/6 * 8, 'flapcat', this.flapcat, this);
        this.name.anchor.setTo(0.5, 0.5);
        this.name.width = game.world.width/3 * 2;
        
        this.name = this.game.add.button(x, game.world.width/6 * 9, 'flapdoge', this.flapdoge, this);
        this.name.anchor.setTo(0.5, 0.5);
        this.name.width = game.world.width/3 * 2;
        
        this.name = this.game.add.button(x, game.world.width/6 * 10, 'flapman', this.flapman, this);
        this.name.anchor.setTo(0.5, 0.5);
        this.name.width = game.world.width/3 * 2;
	},

	update: function () {
        if (this.ground.x < -130) { 
			this.ground.x = 0 ;
        }
	},
    
    flapdoge: function () {
        theme = 'doge';
        this.game.state.start('load');
	},
    
    flapcat: function () {
        theme = 'cat';
        this.game.state.start('load');
	},
    
    flapman: function () {
        theme = 'batman';
        this.game.state.start('load');
	}
};