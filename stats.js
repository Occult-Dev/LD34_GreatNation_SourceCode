GreatNation.stats = function( game ){};

GreatNation.stats.prototype = {
    
    init: function( stats ){
        
        this.displayWhat = 1;
        
        this.train = true;
        this.discover = true;
        this.defend = true;
        
        this.stats = stats;
        this.statInfo = { population: '', food: '', money: '', power: '', love: '' };
        
        if( this.stats.food < 0 ){
            
            if( this.stats.love > -3 ){
                
                this.stats.love--;
                
            }
            
            this.statInfo.food = 'HUNGRY PEOPLE LOOSE SOME LOVE FOR YOU';
            
        }else{
            
            this.statInfo.food = 'YOU\'RE PEOPLE ARE STUFFED';
            
        }
        
        if( this.stats.love < 0 ){
            
            switch( this.stats.love ){
                
                case -1:
                    var runAway = Math.floor( Math.random() * 4 ) + 1;
                    break;
                    
                case -2:
                    var runAway = Math.floor( Math.random() * 3 ) + 1;
                    break;
                    
                case -3:
                    var runAway = Math.floor( Math.random() * 2 ) + 1;
                    break;
                
            }
            
            if( runAway == 1 ){
                
                if( this.stats.population > -3 ){
                    
                    this.stats.population--;
                    
                    this.statInfo.love = 'DUE TO LACK OF LOVE, SOME PEOPLE RAN AWAY';
                    
                }
                
            }else{
                    
                this.statInfo.love = 'YOUR PEOPLE DON\'T SEEM TO LOVE YOU';
                    
            }
            
        }else{
            
            this.statInfo.love = 'YOU\'RE PEOPLE ARE HAPPY';
            
        }
        
        if( this.stats.population < 0 ){
            
            this.statInfo.population = 'LOW POPULATION, LESS LIKELY TO DISCOVER STUFF';
            
            this.discover = false;
            
        }else{
            
            this.statInfo.population = 'YOU HAVE A BUSTLING NATION';
            
        }
        
        if( this.stats.money < 0 ){
            
            this.statInfo.money = 'LOW ON MONEY, UNABLE TO TRAIN SOLIDERS';
            
            this.train = false;
            
        }else{
            
            this.statInfo.money = 'YOU ARE WEALTHY';
            
        }
        
        if( this.stats.power < 0 ){
            
            this.statInfo.power = 'LOW POWER, YOU\'RE UNABLE TO DEFEND YOURSELF';
            
            this.defend = false;
            
        }else{
            
            this.statInfo.power = 'YOU ARE STRONG, AND SCARY';
            
        }
        
    },

    create: function(){
    
        this.bg = game.add.image( 0, -500, 'statsBG' );
            this.bg.scale.set( 10 );
        
        this.infoText = game.add.bitmapText( 18, -300, 'newsFont', 'YOU\'RE RECENT CHOICES HAVE MADE THE FOLLOWING\nCHANGES TO YOUR NATION:' );
            this.infoText.align = 'center';
        
        game.time.events.repeat( 600, 7, function(){
            
            switch( this.displayWhat ){
                
                case 1:
                    game.add.bitmapText( 20, 220, 'newsFont', 'POPULATION' );
                    this.statText = game.add.bitmapText( 470, 220, 'affectFont', GreatNation.game.prototype.convertStat( this.stats.population ).text );
                        this.statText.anchor.setTo( 1, 0 );
                        this.statText.tint = GreatNation.game.prototype.convertStat( this.stats.population ).color;
                    game.add.bitmapText( game.width / 2, 240, 'newsFont', this.statInfo.population ).anchor.setTo( 0.5, 0 );
                    break;
                    
                case 2:
                    game.add.bitmapText( 20, 270, 'newsFont', 'FOOD' );
                    this.statText = game.add.bitmapText( 470, 270, 'affectFont', GreatNation.game.prototype.convertStat( this.stats.food ).text );
                        this.statText.anchor.setTo( 1, 0 );
                        this.statText.tint = GreatNation.game.prototype.convertStat( this.stats.food ).color;
                    game.add.bitmapText( game.width / 2, 290, 'newsFont', this.statInfo.food ).anchor.setTo( 0.5, 0 );
                    break;
                    
                case 3:
                    game.add.bitmapText( 20, 320, 'newsFont', 'MONEY' );
                    this.statText = game.add.bitmapText( 470, 320, 'affectFont', GreatNation.game.prototype.convertStat( this.stats.money ).text );
                        this.statText.anchor.setTo( 1, 0 );
                        this.statText.tint = GreatNation.game.prototype.convertStat( this.stats.money ).color;
                    game.add.bitmapText( game.width / 2, 340, 'newsFont', this.statInfo.money ).anchor.setTo( 0.5, 0 );
                    break;
                    
                case 4:
                    game.add.bitmapText( 20, 370, 'newsFont', 'POWER' );
                    this.statText = game.add.bitmapText( 470, 370, 'affectFont', GreatNation.game.prototype.convertStat( this.stats.power ).text );
                        this.statText.anchor.setTo( 1, 0 );
                        this.statText.tint = GreatNation.game.prototype.convertStat( this.stats.power ).color;
                    game.add.bitmapText( game.width / 2, 390, 'newsFont', this.statInfo.power ).anchor.setTo( 0.5, 0 );
                    break;
                    
                case 5:
                    game.add.bitmapText( 20, 420, 'newsFont', 'LOVE' );
                    this.statText = game.add.bitmapText( 470, 420, 'affectFont', GreatNation.game.prototype.convertStat( this.stats.love ).text );
                        this.statText.anchor.setTo( 1, 0 );
                        this.statText.tint = GreatNation.game.prototype.convertStat( this.stats.love ).color;
                    game.add.bitmapText( game.width / 2, 440, 'newsFont', this.statInfo.love ).anchor.setTo( 0.5, 0 );
                    break;
                    
                case 7:
                    this.bg.inputEnabled = true;
                    this.bg.events.onInputDown.add( function(){
                        
                        if( this.stats.food < 0 && this.stats.money < 0 && this.stats.power < 0 && this.stats.love < 0 ){
            
                            game.state.start( 'end' );
                            
                        }else{
                            
                            game.state.start( 'game', true, false, this.stats, this.train, this.discover, this.defend );
                            
                        }
                        
                    }, this );
                
            }
            
            this.displayWhat++;
            
        }, this );
        
        game.add.tween( this.bg ).to( { y: 0 }, 500, Phaser.Easing.Elastic.Out, true );
        game.add.tween( this.infoText ).to( { y: 160 }, 500, Phaser.Easing.Elastic.Out, true );

    }

};