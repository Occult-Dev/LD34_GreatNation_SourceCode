GreatNation.load = function( game ){};

GreatNation.load.prototype = {
    
	preload: function(){
		
		this.preloadBar1 = this.add.sprite( game.world.width / 2, game.world.height / 2, 'preloadBarOUT' );
		    this.preloadBar1.anchor.set( 0.5 );
		this.preloadBar2 = this.add.sprite( game.world.width / 2, game.world.height / 2, 'preloadBarIN' );
		    this.preloadBar2.anchor.set( 0.5 );
		this.load.setPreloadSprite( this.preloadBar2 );
		
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

	update: function(){
		
		this.stage.backgroundColor = "#54aff7";
		
		game.state.start( 'game', true, false, { population: 0, food: 0, money: 0, power: 0, love: 0 }, true, true, true );
		
	}
	
};