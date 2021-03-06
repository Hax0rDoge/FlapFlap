var load_state = {  
    
    // this only loads everything and then sends it to the menu screen
    
    preload: function() { 
        this.game.stage.backgroundColor = '#fff';
        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		this.game.stage.scale.setShowAll();
		this.game.stage.scale.refresh();
		this.game.stage.scale.refresh();
        
        //thyeme-able images
        this.game.load.image('background', 'assets/img/'+theme+'/background.png');
        this.game.load.spritesheet('bird', 'assets/img/'+theme+'/sprites.png', 200/4, 50, 4);  
        this.game.load.image('tap2fly', 'assets/img/'+theme+'/tap2fly.png');
        this.game.load.image('ground', 'assets/img/'+theme+'/ground.png');
        this.game.load.image('name', 'assets/img/'+theme+'/name.png');
        
        //option names
        this.game.load.image('flapman', 'assets/img/options/flapman.png');
        this.game.load.image('flapdoge', 'assets/img/options/flapdoge.png');
        this.game.load.image('flapcat', 'assets/img/options/flapcat.png');
        
        //confettie!!
        this.game.load.image('c_green', 'assets/img/yay/c_green.png');
        this.game.load.image('c_navy', 'assets/img/yay/c_navy.png');
        this.game.load.image('c_red', 'assets/img/yay/c_red.png');
        this.game.load.image('c_sky', 'assets/img/yay/c_sky.png');
        this.game.load.image('c_yellow', 'assets/img/yay/c_yellow.png');
        
        
        //basic images
        this.game.load.image('opt', 'assets/img/opt.png');
        this.game.load.image('pipe', 'assets/img/pipe.png');
        
        //audio
        this.game.load.audio('flap', 'assets/sound/jump.wav');
        this.game.load.audio('die', 'assets/sound/death.mp3');
        this.game.load.audio('point', 'assets/sound/point.mp3');

    },

    create: function() {        
        this.game.state.start('menu');
    }
};