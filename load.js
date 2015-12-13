GreatNation.load = function( game ){};

GreatNation.load.prototype = {
    
	preload: function(){
		
		this.preloadBar1 = this.add.sprite( game.world.width / 2, game.world.height / 2, 'preloadBarOUT' );
		    this.preloadBar1.anchor.set( 0.5 );
		this.preloadBar2 = this.add.sprite( game.world.width / 2, game.world.height / 2, 'preloadBarIN' );
		    this.preloadBar2.anchor.set( 0.5 );
		this.load.setPreloadSprite( this.preloadBar2 );
		
		this.load.audio( 'gameTheme', 'media/audio/gameTheme.ogg' );
		this.load.audio( 'statsTheme', 'media/audio/statsTheme.ogg' );
		this.load.audio( 'endTheme', 'media/audio/endTheme.ogg' );
		
		this.load.audio( 'passClick', 'media/audio/passClick.ogg' );
		this.load.audio( 'vetoClick', 'media/audio/vetoClick.ogg' );
		this.load.audio( 'newsSFX', 'media/audio/newsSFX.ogg' );
		this.load.audio( 'paperSFX', 'media/audio/paperSFX.ogg' );
		this.load.audio( 'statPositive', 'media/audio/statPositive.ogg' );
		this.load.audio( 'statNegative', 'media/audio/statNegative.ogg' );
		this.load.audio( 'execution', 'media/audio/execution.ogg' );
		
	    this.load.bitmapFont( 'newsFont', 'media/GreatNation_Font.png', 'media/GreatNation_Font.fnt' );
	    this.load.bitmapFont( 'affectFont', 'media/GreatNation_Font2.png', 'media/GreatNation_Font2.fnt' );
	    this.load.bitmapFont( 'roundsFont', 'media/GreatNation_Font3.png', 'media/GreatNation_Font3.fnt' );
	    
		this.load.image( 'gameBG', 'media/gameBG.png' );
		this.load.image( 'statsBG', 'media/statsBG.png' );
		this.load.image( 'blood', 'media/gameOfThrones.png' );
		
		this.load.spritesheet( 'tally_Vertical', 'media/tally.png', 12, 32 );
		this.load.spritesheet( 'tally_Horizontal', 'media/tally.png', 108, 32 );
		this.load.spritesheet( 'button', 'media/buttons.png', 120, 60 );
		this.load.spritesheet( 'newsBanner', 'media/newsBanner.png', 220, 80 );
		
	},
    
	create: function(){
		
		GreatNation.music = { gameTheme: game.add.audio( 'gameTheme', 1, true ), statsTheme: game.add.audio( 'statsTheme', 1, true ), endTheme: game.add.audio( 'endTheme', 1, true ) };
		
		GreatNation.SFX = { passClick: game.add.audio( 'passClick' ), vetoClick: game.add.audio( 'vetoClick' ), news: game.add.audio( 'newsSFX' ), paper: game.add.audio( 'paperSFX' ), statPositive: game.add.audio( 'statPositive' ), statNegative: game.add.audio( 'statNegative' ), execution: game.add.audio( 'execution' ) };
		
		this.stage.backgroundColor = "#54aff7";
		
		game.state.start( 'menu' );
		
	}
	
};