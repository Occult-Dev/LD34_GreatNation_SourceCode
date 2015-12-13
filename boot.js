var GreatNation = {};
GreatNation.total = { passed: 0, vetoed: 0 };
GreatNation.boot = function( game ){};

GreatNation.boot.prototype = {
	
	preload: function(){
	
		this.stage.backgroundColor = "#1f2e50";
		
		this.load.image( 'preloadBarOUT', 'media/preloaderBarOUTLINE.png' );
		this.load.image( 'preloadBarIN', 'media/preloaderBarFILL.png' );
		
	},

	create: function(){
		 
		 //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        if ( this.game.device.desktop ){
            
            //  If you have any desktop specific settings, they can go in here
            
            document.getElementsByTagName( 'canvas' )[0].style.boxShadow = '5px 5px 7px #222';
            
        }else{
            
            //  Same goes for mobile settings.
            
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            this.scale.minWidth = 360;
            this.scale.minHeight = 360;
            
            this.scale.maxWidth = 1000;
            this.scale.maxHeight = 1000;
            
            this.scale.forceLandscape = true;
            
            this.scale.pageAlignHorizontally = true;
            
        }
        
	},

	update: function(){
	    
		game.state.start( 'load' );
		
	}
	
};