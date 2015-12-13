GreatNation.game = function( game ){};

GreatNation.game.prototype = {
    
    init: function( stats, train, discover, defend ){
        
        GreatNation.music.statsTheme.stop();
        GreatNation.music.gameTheme.play();
        
        GreatNation.game.prototype.nationStats = stats;
        
        this.train = train;
        
        this.discover = discover;
        
        this.defend = defend;
        
        this.inNeedOfNewsYO = true;
        this.newsAmnt = 0;
        this.newsEffect = {};
        
        this.votable = false;
        
        this.amntPassed = 0;
        this.amntVetoed = 0;
        
        this.passedTallyX = 469;
        this.vetoedTallyX = 469;
        
    },
    
	create: function(){
        
		game.add.image( 0, 0, 'gameBG' ).scale.set( 10 );
		
		this.updateNationStats( 'create' );
		
		this.roundsText = game.add.bitmapText( 10, 10, 'roundsFont', '00 / 10' );
		
		game.add.bitmapText( 117, 330, 'affectFont', 'UNABLE TO\nDEFEND!' ).align = 'center';
		GreatNation.passBtn = game.add.button( 100, 310, 'button', this.pass, this, 1, 0, 2, 0 );
		this.vetoBtn = game.add.button( 280, 310, 'button', this.veto, this, 4, 3, 5, 3 );
		
	},

	update: function(){
		
		if( this.inNeedOfNewsYO ){
		    
		    this.newsAmnt++;
		    
		    if( this.newsAmnt > 10 ){
		        
		        this.inNeedOfNewsYO = false;
		        
		        game.time.events.add( 500, function(){ game.state.start( 'stats', true, false, this.nationStats ); }, this );
		        
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
	    
	    this.horribleStatCapHack_ohGodImBadAtProgramming();
	    
	    if( change == 'create' ){
	        
	        this.populationText = game.add.bitmapText( 210, 396, 'newsFont', 'POP.' );
        	    this.populationAmntText = game.add.bitmapText( 290, 396, 'affectFont', this.convertStat( this.nationStats.population ).text );
        	    this.populationAmntText.anchor.setTo( 1, 0 );
        	    this.populationAmntText.tint = this.convertStat( this.nationStats.population ).color;
        	this.foodText = game.add.bitmapText( 210, 426, 'newsFont', 'FOOD' );
        	    this.foodAmntText = game.add.bitmapText( 290, 426, 'affectFont', this.convertStat( this.nationStats.food ).text );
        	    this.foodAmntText.anchor.setTo( 1, 0 );
        	    this.foodAmntText.tint = this.convertStat( this.nationStats.food ).color;
        	this.moneyText = game.add.bitmapText( 210, 411, 'newsFont', 'MONEY' );
        	    this.moneyAmntText = game.add.bitmapText( 290, 411, 'affectFont', this.convertStat( this.nationStats.money ).text );
        	    this.moneyAmntText.anchor.setTo( 1, 0 );
        	    this.moneyAmntText.tint = this.convertStat( this.nationStats.money ).color;
        	this.powerText = game.add.bitmapText( 210, 441, 'newsFont', 'POWER' );
        	    this.powerAmntText = game.add.bitmapText( 290, 441, 'affectFont', this.convertStat( this.nationStats.power ).text );
        	    this.powerAmntText.anchor.setTo( 1, 0 );
        	    this.powerAmntText.tint = this.convertStat( this.nationStats.power ).color;
        	this.loveText = game.add.bitmapText( 210, 456, 'newsFont', 'LOVE' );
        	    this.loveAmntText = game.add.bitmapText( 290, 456, 'affectFont', this.convertStat( this.nationStats.love ).text );
        	    this.loveAmntText.anchor.setTo( 1, 0 );
        	    this.loveAmntText.tint = this.convertStat( this.nationStats.love ).color;
	        
	    }else{
	        
		    this.populationAmntText.text = this.convertStat( this.nationStats.population ).text;
		    this.populationAmntText.tint = this.convertStat( this.nationStats.population ).color;
		    
		    this.foodAmntText.text = this.convertStat( this.nationStats.food ).text;
		    this.foodAmntText.tint = this.convertStat( this.nationStats.food ).color;
		    
		    this.moneyAmntText.text = this.convertStat( this.nationStats.money ).text;
		    this.moneyAmntText.tint = this.convertStat( this.nationStats.money ).color;
		
		    this.powerAmntText.text = this.convertStat( this.nationStats.power ).text;
		    this.powerAmntText.tint = this.convertStat( this.nationStats.power ).color;
		
		    this.loveAmntText.text = this.convertStat( this.nationStats.love ).text;
		    this.loveAmntText.tint = this.convertStat( this.nationStats.love ).color;
	        
	    }
	    
	},
	
	convertStat: function( stat ){
	    
	    if( stat == -3 ){
	        
	        return { text: '---', color: 0xe9415b };
	        
	    }else if( stat == -2 ){
	        
	        return { text: '--', color: 0xe9415b };
	        
	    }else if( stat == -1 ){
	        
	        return { text: '-', color: 0xe9415b };
	        
	    }else if( stat === 0 ){
	        
	        return { text: '+', color: 0x6ddd64 };
	        
	    }else if( stat == 1 ){
	        
	        return { text: '++', color: 0x6ddd64 };
	        
	    }else if( stat == 2 ){
	        
	        return { text: '+++', color: 0x6ddd64 };
	        
	    }
	    
	},
	
	makeNewNews: function(){
	    
	    this.newsBanner = this.add.image( -440, 110, 'newsBanner' );
	    this.newsBanner.scale.set( 2 );
	    
	    this.newsText_INFO = game.add.bitmapText( -300, 180, 'newsFont', 'BLAH\nBLAH\nBLAH' );
	    
	    this.newsText_passAffect = game.add.bitmapText( -300, 235, 'affectFont', 'PASS/AFFECT' );
	        this.newsText_passAffect.anchor.setTo( 0, 0 );
	        this.newsText_passAffect.tint = 0x6ddd64;
	        
	    this.newsText_vetoAffect = game.add.bitmapText( -120, 235, 'affectFont', 'VETO/AFFECT' );
	        this.newsText_vetoAffect.anchor.setTo( 1, 0 );
            this.newsText_vetoAffect.tint = 0xe9415b;
            
	    var newsType = Math.floor( Math.random() * 18 ) + 1;
	    
	    switch( newsType ){
	        
            case 1:
                this.newsBanner.frame = 0;
                this.newsText_INFO.text = ( 'HOLY SMOKES (LITERALLY)!\nA CHURCH GOES UP IN FLAMES!\nCARE TO LEND A HELPING HAND?' );
                this.newsText_passAffect.text = ( 'LOVE+/MONEY-' );
                this.newsText_vetoAffect.text = ( 'LOVE-' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.love++; GreatNation.game.prototype.nationStats.money--; },
                    
                    veto: function(){ GreatNation.game.prototype.nationStats.love--; }
                    
                };
	            break;
	            
	        case 2:
	            this.newsBanner.frame = 1;
	            this.newsText_INFO.text = ( 'INVASION! ANOTHER\nRULER WANTS YOUR STUFF!\nGO TO WAR?' );
                this.newsText_passAffect.text = ( 'POWER-' );
                this.newsText_vetoAffect.text = ( 'MONEY-' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.power--; },
                    
                    veto: function(){ GreatNation.game.prototype.nationStats.money--; GreatNation.passBtn.alpha = 1; }
                    
                };
                if( !this.defend ){
                    
                    GreatNation.passBtn.alpha = 0;
                    
                }
	            break;
	            
            case 3:
	            this.newsBanner.frame = 2;
	            this.newsText_INFO.text = ( 'NEIGHBORING NATIONS NEGLECT!\nLOCAL RULER GOES BONKERS!\nTAKE IN REFUGEES?' );
                this.newsText_passAffect.text = ( 'POP+/FOOD-' );
                this.newsText_vetoAffect.text = ( 'LOVE-' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.population++; GreatNation.game.prototype.nationStats.food--; },
                    
                    veto: function(){ GreatNation.game.prototype.nationStats.love--; }
                    
                };
	            break;
	            
            case 4:
                if( this.train ){
                    
    	            this.newsBanner.frame = 3;
    	            this.newsText_INFO.text = ( 'AN ARMY A DAY, KEEPS\nTHE BAD GUYS AT BAY!\nSTRENGTHEN YOUR ARMY?' );
                    this.newsText_passAffect.text = ( 'POWER+/MONEY-' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.power++; GreatNation.game.prototype.nationStats.money--; },
                        
                        veto: function(){}
                        
                    };
                    
                }else{
                    
                    this.newsBanner.frame = 4;
    	            this.newsText_INFO.text = ( 'FAMILY MEMBER DIED, POOR YOU!\nTHEY WERE RICH, LUCKY YOU!\nINHERENT FAMILY JEWELS?' );
                    this.newsText_passAffect.text = ( 'MONEY+' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.money++; },
                        
                        veto: function(){}
                        
                    };
                    
                }
	            break;
	            
            case 5:
	            this.newsBanner.frame = 4;
	            this.newsText_INFO.text = ( 'FAMOUS RICH PERSON IN TOWN!\nHE WANTS TO BUY STUFF!\nSELL SOME OF YOUR FOOD?' );
                this.newsText_passAffect.text = ( 'MONEY+/FOOD-' );
                this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.money++; GreatNation.game.prototype.nationStats.food--; },
                    
                    veto: function(){}
                    
                };
	            break;
	            
            case 6:
                if( this.discover ){
                    
    	            this.newsBanner.frame = 5;
    	            this.newsText_INFO.text = ( 'DISCOVERY! SOME OF YOUR\nEXPLORERS FOUND STUFF!\nCLAIM LAND AND INHABITANTS?' );
                    this.newsText_passAffect.text = ( 'POP+' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.population++; },
                        
                        veto: function(){}
                        
                    };
                    
                }else{
                    
                    this.newsBanner.frame = 0;
    	            this.newsText_INFO.text = ( 'OH-NO, A FIRE!\nFARMS BURNING! RISK PEOPLE\nTO SAVE FOOD?' );
                    this.newsText_passAffect.text = ( 'POP-' );
                    this.newsText_vetoAffect.text = ( 'FOOD-' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.population--; },
                        
                        veto: function(){ GreatNation.game.prototype.nationStats.food--; }
                        
                    };
                    
                }
	            break;
	            
            case 7:
	            this.newsBanner.frame = 4;
	            this.newsText_INFO.text = ( 'A TRAVELLING QUEEN VISITS!\nSHE WOULD LIKE TO PURCHASE\nSOME OF YOUR SOLIDERS. SELL?' );
                this.newsText_passAffect.text = ( 'MONEY+/POWER-' );
                this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.money++; GreatNation.game.prototype.nationStats.power--; },
                    
                    veto: function(){}
                    
                };
	            break;
	            
	        case 8:
	            if( this.discover ){
    	            
    	            this.newsBanner.frame = 5;
    	            this.newsText_INFO.text = ( 'DISCOVERY! YOUR PEOPLE\nFOUND A HUGE SACK OF MONEY!\n"BORROW SACK"?' );
                    this.newsText_passAffect.text = ( 'MONEY+' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.money++; },
                        
                        veto: function(){}
                        
                    };
                    
	            }else{
                    
                    this.newsBanner.frame = 2;
    	            this.newsText_INFO.text = ( 'EARTHQUAKE DESTROYS NEARBY\nTOWN. WOULD YOU LIKE\nTO TAKE IN SURVIVORS?' );
                    this.newsText_passAffect.text = ( 'POP+/FOOD-' );
                    this.newsText_vetoAffect.text = ( 'LOVE-' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.population++; GreatNation.game.prototype.nationStats.food--; },
                        
                        veto: function(){ GreatNation.game.prototype.nationStats.love--; }
                        
                    };
                    
                }
	            break;
	            
            case 9:
	            this.newsBanner.frame = 1;
	            this.newsText_INFO.text = ( 'INVASION!\nSOME THEIVES WANT YOUR FOOD!\nFIGHT THEM?' );
                this.newsText_passAffect.text = ( 'POWER-' );
                this.newsText_vetoAffect.text = ( 'FOOD-' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.power--; },
                    
                    veto: function(){ GreatNation.game.prototype.nationStats.food--; GreatNation.passBtn.alpha = 1; }
                    
                };
                if( !this.defend ){
                    
                    GreatNation.passBtn.alpha = 0;
                    
                }
	            break;
	            
	        case 10:
	            this.newsBanner.frame = 5;
	            this.newsText_INFO.text = ( 'DISCOVERY! YOUR PEOPLE\nFOUND SOME LOST TRAVELERS!\nTAKE THEM IN?' );
                this.newsText_passAffect.text = ( 'POP+' );
                this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.population++; },
                    
                    veto: function(){}
                    
                };
	            break;
	            
            case 11:
	            this.newsBanner.frame = 4;
	            this.newsText_INFO.text = ( 'A FELLOW RULER VISITS!\nHE WOULD LIKE SOME "WORKERS".\nSELL HIM SOME SLAVES?' );
                this.newsText_passAffect.text = ( 'MONEY+/POP-/LOVE-' );
                this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.money++; GreatNation.game.prototype.nationStats.population--; GreatNation.game.prototype.nationStats.love--; },
                    
                    veto: function(){}
                    
                };
	            break;
	            
            case 12:
                if( this.discover ){
    	            
    	            this.newsBanner.frame = 5;
    	            this.newsText_INFO.text = ( 'DISCOVERY! YOUR PEOPLE HAVE\nFOUND AN ABANDONED TRADERS\nWAGON. WANT TO LOOT IT?' );
                    this.newsText_passAffect.text = ( 'FOOD+/MONEY+' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.food++; GreatNation.game.prototype.nationStats.money++; },
                        
                        veto: function(){}
                        
                    };
                    
                }else{
                    
                    this.newsBanner.frame = 4;
    	            this.newsText_INFO.text = ( 'LOCAL FAIR IN TOWN!\nSELL SOME FOOD TO THE\nHUNGRY PARTCIPANTS?' );
                    this.newsText_passAffect.text = ( 'MONEY+/FOOD-' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.money++;  GreatNation.game.prototype.nationStats.food--; },
                        
                        veto: function(){}
                        
                    };
                    
                }
	            break;
	            
            case 13:
	            this.newsBanner.frame = 0;
	            this.newsText_INFO.text = ( 'OH-NO, A FIRE!\nFARMS BURNING! RISK PEOPLE\nTO SAVE FOOD?' );
                this.newsText_passAffect.text = ( 'POP-' );
                this.newsText_vetoAffect.text = ( 'FOOD-' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.population--; },
                    
                    veto: function(){ GreatNation.game.prototype.nationStats.food--; }
                    
                };
                break;
	            
            case 14:
	            this.newsBanner.frame = 2;
	            this.newsText_INFO.text = ( 'EARTHQUAKE DESTROYS NEARBY\nTOWN. WOULD YOU LIKE\nTO TAKE IN SURVIVORS?' );
                this.newsText_passAffect.text = ( 'POP+/FOOD-' );
                this.newsText_vetoAffect.text = ( 'LOVE-' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.population++; GreatNation.game.prototype.nationStats.food--; },
                    
                    veto: function(){ GreatNation.game.prototype.nationStats.love--; }
                    
                };
                break;
	            
            case 15:
	            this.newsBanner.frame = 1;
	            this.newsText_INFO.text = ( 'SEA-PIRATES INVADE!\nTHEY\'RE LOOKING FOR BOOTY!\nFIGHT THEM OFF?' );
                this.newsText_passAffect.text = ( 'POWER-' );
                this.newsText_vetoAffect.text = ( 'MONEY-/FOOD-' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.power--; },
                    
                    veto: function(){ GreatNation.game.prototype.nationStats.money--; GreatNation.game.prototype.nationStats.food--; GreatNation.passBtn.alpha = 1; }
                    
                };
                if( !this.defend ){
                
                    GreatNation.passBtn.alpha = 0;
                    
                }
                break;
	            
            case 16:
	            this.newsBanner.frame = 4;
	            this.newsText_INFO.text = ( 'LOCAL FAIR IN TOWN!\nSELL SOME FOOD TO THE\nHUNGRY PARTCIPANTS?' );
                this.newsText_passAffect.text = ( 'MONEY+/FOOD-' );
                this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                this.newsEffect = {
                    
                    pass: function(){ GreatNation.game.prototype.nationStats.money++;  GreatNation.game.prototype.nationStats.food--; },
                    
                    veto: function(){}
                    
                };
                break;
                
            case 17:
                if( this.train ){
                    
    	            this.newsBanner.frame = 3;
    	            this.newsText_INFO.text = ( 'A STRONG NATION,\nIS A LASTING NATION!\nTRAIN SOME SOLIDERS?' );
                    this.newsText_passAffect.text = ( 'POWER+/MONEY-' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.power++; GreatNation.game.prototype.nationStats.money--; },
                        
                        veto: function(){}
                        
                    };
                    
                }else{
                    
                    this.newsBanner.frame = 4;
    	            this.newsText_INFO.text = ( 'INVESTOR! SOME RICH DUMMY\nWOULD LIKE TO INVEST\nIN YOUR NATION! AGREE?' );
                    this.newsText_passAffect.text = ( 'MONEY+' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.money++; },
                        
                        veto: function(){}
                        
                    };
                    
                }
	            break;
	            
            case 18:
                if( this.discover ){
                    
    	            this.newsBanner.frame = 4;
    	            this.newsText_INFO.text = ( 'FAMILY MEMBER DIED, POOR YOU!\nTHEY WERE RICH, LUCKY YOU!\nINHERENT FAMILY JEWELS?' );
                    this.newsText_passAffect.text = ( 'MONEY+' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.money++; },
                        
                        veto: function(){}
                        
                    };
                    
                }else{
                    
                    this.newsBanner.frame = 4;
    	            this.newsText_INFO.text = ( 'SOMEONE WITH TOO MUCH\nMONEY WOULD LIKE TO INVEST\nIN YOUR NATION! AGREE?' );
                    this.newsText_passAffect.text = ( 'MONEY+' );
                    this.newsText_vetoAffect.text = ( 'NO EFFECT' );
                    this.newsEffect = {
                        
                        pass: function(){ GreatNation.game.prototype.nationStats.money++; },
                        
                        veto: function(){}
                        
                    };
                    
                }
                break;
	        
	    }
		    
	    var newsTween = game.add.tween( this.newsBanner ).to( { x: 30 }, 500, Phaser.Easing.Bounce.Out, true );
	    
        game.add.tween( this.newsText_INFO ).to( { x: 168 }, 500, Phaser.Easing.Bounce.Out, true );
        game.add.tween( this.newsText_passAffect ).to( { x: 169 }, 500, Phaser.Easing.Bounce.Out, true );
        game.add.tween( this.newsText_vetoAffect ).to( { x: 450 }, 500, Phaser.Easing.Bounce.Out, true );
        
        newsTween.onComplete.addOnce( function(){
            
            this.votable = true;
            
        }, this );
	    
	},
	
	pass: function(){
	    
	    if( this.votable ){
            
            if( GreatNation.passBtn.alpha != 1 ){
                
                return;
                
            }
            
            GreatNation.SFX.passClick.play();
            
            this.newsEffect.pass();
            	                 
	        this.amntPassed++;
	        GreatNation.total.passed++;
	        
	        if( this.amntPassed % 5 === 0 ){
	            
	            game.add.image( this.passedTallyX + 8, 9, 'tally_Horizontal', 1 );
	            
	        }else{
	            
	            game.add.image( this.passedTallyX, 9, 'tally_Vertical', 0 );
	            
	        }
	        
	        this.passedTallyX -= 20;
	        
	        this.newsBanner.tint = 0x6ddd64;
	        
	        this.votable = false;
	        this.inNeedOfNewsYO = true;
	        
	        this.updateNationStats( 'update' );
	        
	    }
	    
	},
	
	veto: function(){
	    
	    if( this.votable ){
            
            GreatNation.SFX.vetoClick.play();
            		        
            this.newsEffect.veto();
		        
            this.amntVetoed++;
	        GreatNation.total.vetoed++;
	        
            if( this.amntVetoed % 5 === 0 ){
                
                game.add.image( this.vetoedTallyX + 8, 49, 'tally_Horizontal', 2 );
                
            }else{
                
                game.add.image( this.vetoedTallyX, 49, 'tally_Vertical', 1 );
                
            }
            
            this.vetoedTallyX -= 20;
            
            this.newsBanner.tint = 0xe9415b;
            
            this.votable = false;
            this.inNeedOfNewsYO = true;
            
            this.updateNationStats( 'update' );
	        
	    }
	    
	},
	
	horribleStatCapHack_ohGodImBadAtProgramming: function(){
	    
	    if( this.nationStats.population < -3 ){
	        
	        this.nationStats.population = -3;
	        
	    }else if( this.nationStats.population > 2 ){
	        
	        this.nationStats.population = 2;
	        
	    }
	    
	    if( this.nationStats.money < -3 ){
	        
	        this.nationStats.money = -3;
	        
	    }else if( this.nationStats.money > 2 ){
	        
	        this.nationStats.money = 2;
	        
	    }
	    
	    if( this.nationStats.food < -3 ){
	        
	        this.nationStats.food = -3;
	        
	    }else if( this.nationStats.food > 2 ){
	        
	        this.nationStats.food = 2;
	        
	    }
	    
	    if( this.nationStats.power < -3 ){
	        
	        this.nationStats.power = -3;
	        
	    }else if( this.nationStats.power > 2 ){
	        
	        this.nationStats.power = 2;
	        
	    }
	    
	    if( this.nationStats.love < -3 ){
	        
	        this.nationStats.love = -3;
	        
	    }else if( this.nationStats.love > 2 ){
	        
	        this.nationStats.love = 2;
	        
	    }
	    
	}
	
};