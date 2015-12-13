GreatNation.menu = function( game ){};

GreatNation.menu.prototype = {
    
    init: function(){
        
        GreatNation.music.endTheme.stop();
        GreatNation.music.gameTheme.play();
        
        this.inNeedOfNewsYO = true;
        this.newsAmnt = 0;
        this.newsEffect = {};
        
        this.tutorialStep = 1;
        
    },
    
	create: function(){
        
		game.add.image( 0, 0, 'gameBG' ).scale.set( 10 );
		
		this.updateNationStats( 'tutorial' );
		
		this.roundsText = game.add.bitmapText( 10, 10, 'roundsFont', '0 / 5' );
		
		this.passBtn = game.add.button( 100, 310, 'button', this.pass, this, 1, 0, 2, 0 );
		this.vetoBtn = game.add.button( 280, 310, 'button', this.veto, this, 4, 3, 5, 3 );
		
	},

	update: function(){
		
		if( this.inNeedOfNewsYO ){
		    
		    this.newsAmnt++;
		    
		    if( this.newsAmnt > 10 ){
		        
		        this.inNeedOfNewsYO = false;
		        
		        game.time.events.add( 500, function(){ GreatNation.music.gameTheme.stop(); game.state.start( 'game', true, false, { population: 0, food: 0, money: 0, power: 0, love: 0 }, true, true, true ); }, this );
		        
		        return;
		        
		    }
		    
		    if( this.newsAmnt < 10 ){
		        
		        this.roundsText.text = '0' + this.newsAmnt + ' / 10';
		        
		    }else{
		        
		        this.roundsText.text = this.newsAmnt + ' / 10';
		        
		    }
		    
		    GreatNation.SFX.news.play();
		    
		    this.makeNewNews();
		    
		    this.inNeedOfNewsYO = false;
		    
		}
		
	},
	
	updateNationStats: function( change ){
	    
	    if( change == 'tutorial' ){
	        
	        this.tutTxt1 = game.add.bitmapText( game.width / 2, 390, 'newsFont',   'TUTORIAL\n--------\nPRESS' );
	        this.tutTxt2 = game.add.bitmapText( game.width / 2, 443, 'affectFont', '"VETO"' );
	        this.tutTxt3 = game.add.bitmapText( game.width / 2, 460, 'newsFont',   'TO PLAY' );
            
            this.tutTxt1.anchor.setTo( 0.5, 0 );
            this.tutTxt1.align = 'center';
            this.tutTxt2.anchor.setTo( 0.5, 0 );
            this.tutTxt2.tint = 0xe9415b;
            this.tutTxt2.align = 'center';
            this.tutTxt3.anchor.setTo( 0.5, 0 );
            this.tutTxt3.align = 'center';
	        
	    }else if( change == 'showStats_POSITIVE' ){
	        
	        this.tutTxt1.destroy();
	        this.tutTxt2.destroy();
	        this.tutTxt3.destroy();
	        
	        this.populationText = game.add.bitmapText( 210, 396, 'newsFont', 'POP.' );
        	    this.populationAmntText = game.add.bitmapText( 290, 396, 'affectFont', '+++' );
        	    this.populationAmntText.anchor.setTo( 1, 0 );
        	    this.populationAmntText.tint = 0x6ddd64;
        	this.foodText = game.add.bitmapText( 210, 426, 'newsFont', 'FOOD' );
        	    this.foodAmntText = game.add.bitmapText( 290, 426, 'affectFont', '+++' );
        	    this.foodAmntText.anchor.setTo( 1, 0 );
        	    this.foodAmntText.tint = 0x6ddd64;
        	this.moneyText = game.add.bitmapText( 210, 411, 'newsFont', 'MONEY' );
        	    this.moneyAmntText = game.add.bitmapText( 290, 411, 'affectFont', '+++' );
        	    this.moneyAmntText.anchor.setTo( 1, 0 );
        	    this.moneyAmntText.tint = 0x6ddd64;
        	this.powerText = game.add.bitmapText( 210, 441, 'newsFont', 'POWER' );
        	    this.powerAmntText = game.add.bitmapText( 290, 441, 'affectFont', '+++' );
        	    this.powerAmntText.anchor.setTo( 1, 0 );
        	    this.powerAmntText.tint = 0x6ddd64;
        	this.loveText = game.add.bitmapText( 210, 456, 'newsFont', 'LOVE' );
        	    this.loveAmntText = game.add.bitmapText( 290, 456, 'affectFont', '+++' );
        	    this.loveAmntText.anchor.setTo( 1, 0 );
        	    this.loveAmntText.tint = 0x6ddd64;
	        
	    }else if( change == 'showStats_NEGATIVE' ){
	        
	        this.populationAmntText.destroy();
	        this.foodAmntText.destroy();
	        this.moneyAmntText.destroy();
	        this.powerAmntText.destroy();
	        this.loveAmntText.destroy();
	        
    	    this.populationAmntText = game.add.bitmapText( 290, 396, 'affectFont', '---' );
    	    this.populationAmntText.anchor.setTo( 1, 0 );
    	    this.populationAmntText.tint = 0xe9415b;
    	    
    	    this.foodAmntText = game.add.bitmapText( 290, 426, 'affectFont', '---' );
    	    this.foodAmntText.anchor.setTo( 1, 0 );
    	    this.foodAmntText.tint = 0xe9415b;
        	
    	    this.moneyAmntText = game.add.bitmapText( 290, 411, 'affectFont', '---' );
    	    this.moneyAmntText.anchor.setTo( 1, 0 );
    	    this.moneyAmntText.tint = 0xe9415b;
        	
    	    this.powerAmntText = game.add.bitmapText( 290, 441, 'affectFont', '---' );
    	    this.powerAmntText.anchor.setTo( 1, 0 );
    	    this.powerAmntText.tint = 0xe9415b;
        	
    	    this.loveAmntText = game.add.bitmapText( 290, 456, 'affectFont', '---' );
    	    this.loveAmntText.anchor.setTo( 1, 0 );
    	    this.loveAmntText.tint = 0xe9415b;
	        
	    }
	    
	},
	
	makeNewNews: function(){
	    
	    this.newsBanner = this.add.image( -440, 110, 'newsBanner', 6 );
	    this.newsBanner.scale.set( 2 );
	    
	    this.newsText_INFO = game.add.bitmapText( -300, 180, 'newsFont', 'BLAH\nBLAH\nBLAH' );
	    
	    this.newsText_passAffect = game.add.bitmapText( -300, 235, 'affectFont', 'NEXT' );
	        this.newsText_passAffect.anchor.setTo( 0, 0 );
	        this.newsText_passAffect.tint = 0x6ddd64;
	        
	    this.newsText_vetoAffect = game.add.bitmapText( -120, 235, 'affectFont', 'SKIP TUTORIAL' );
	        this.newsText_vetoAffect.anchor.setTo( 1, 0 );
            this.newsText_vetoAffect.tint = 0xe9415b;
	    
	    switch( this.tutorialStep ){
	        
            case 1:
                this.newsText_INFO.text = ( 'CONGRATULATIONS!\nYOU CONTROL YOUR VERY\nOWN NATION!' );
	            break;
	            
	        case 2:
	            this.newsText_INFO.text = ( 'AS RULER, YOU HAVE TWO\nIMPORTANT CHOICES TO MAKE.\n"ACCEPT" OR "VETO".' );
	            break;
	            
            case 3:
	            this.newsText_INFO.text = ( 'THE GREEN BUTTON IS THE\n"ACCEPT" BUTTON.' );
	            break;
	            
            case 4:
	            this.newsText_INFO.text = ( 'THE PINK BUTTON IS THE\n"VETO" BUTTON.' );
	            break;
	            
            case 5:
	            this.newsText_INFO.text = ( 'WHENEVER YOU "ACCEPT"\nAN ACTION, WHATEVER IS IN\nGREEN TEXT WILL HAPPEN.' );
	            this.newsText_passAffect.text = ( 'HIT "ACCEPT" TO CONTINUE' );
	            this.newsText_vetoAffect.text = ( 'SKIP' );
	            break;
	            
            case 6:
	            this.newsText_INFO.text = ( 'SIMILARLY, WHENEVER YOU "VETO"\nAN ACTION, THE EFFECT IN RED\nWILL HAPPEN.' );
	            this.newsText_vetoAffect.text = ( 'HIT "VETO" TO SKIP' );
	            break;
	            
            case 7:
	            this.newsText_INFO.text = ( 'THE PAPER BELOW IS YOUR\nNATIONS STATS. MAKE SURE YOU\nKEEP THEM "POSITIVE" (+)' );
	            this.updateNationStats( 'showStats_POSITIVE' );
	            break;
	            
            case 8:
	            this.newsText_INFO.text = ( 'OR ELSE NEGATIVE SIDE\nEFFECTS WILL OCCUR, WHICH\nMAKES RULING MORE DIFFCULT.' );
	            this.updateNationStats( 'showStats_NEGATIVE' );
	            break;
	            
            case 9:
	            this.newsText_INFO.text = ( 'THESE NEGATIVE SIDE EFFECTS\nWILL BE REVEALED TO YOU\nOVER TIME...' );
	            break;
	            
            case 10:
	            this.newsText_INFO.text = ( 'BECAUSE, LET\'S FACE IT,\nRULING A NATION IS TOUGH.\nGOOD LUCK GLORIOUS RULER!' );
	            this.newsText_passAffect.text = ( 'PLAY GAME' );
	            this.newsText_vetoAffect.text = ( 'PLAY GAME' );
	            break;
	        
	    }
		    
	    var newsTween = game.add.tween( this.newsBanner ).to( { x: 30 }, 500, Phaser.Easing.Bounce.Out, true );
	    
        game.add.tween( this.newsText_INFO ).to( { x: 150 }, 500, Phaser.Easing.Bounce.Out, true );
        game.add.tween( this.newsText_passAffect ).to( { x: 150 }, 500, Phaser.Easing.Bounce.Out, true );
        game.add.tween( this.newsText_vetoAffect ).to( { x: 450 }, 500, Phaser.Easing.Bounce.Out, true );
        
        newsTween.onComplete.addOnce( function(){
            
            this.votable = true;
            
        }, this );
	    
	},
	
	pass: function(){
        
        GreatNation.SFX.passClick.play();
                        
        this.tutorialStep++;
        
        this.newsBanner.tint = 0x6ddd64;
        
        this.votable = false;
        this.inNeedOfNewsYO = true;
	    
	},
	
	veto: function(){
	    
	    GreatNation.SFX.vetoClick.play();
	    
	    game.state.start( 'game', true, false, { population: 0, food: 0, money: 0, power: 0, love: 0 }, true, true, true );
	    
	}
	
};