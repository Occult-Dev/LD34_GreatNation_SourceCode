GreatNation.end = function( game ){};

GreatNation.end.prototype = {
    
    init: function(){
        
        this.lines = [
        
            "DEAR GREAT AND GLORIOUS LEADER...",
            "IT IS WITH A HEAVY HEART, THAT I REGRET TO",
            "INFORM YOU... WELL... QUITE SIMPLY... YOU",
            "DESTROYED THIS NATION.",
            "",
            "PEOPLE ARE HUNGRY.",
            "WE HAVE NO DEFENCE.",
            "WE HAVE NO MONEY.",
            "AND WE ALL HATE YOU.",
            "",
            "TOMORROW WE WILL RISE UP,",
            "OVERTHROW, AND EXECUTE YOU.",
            "...",
            "DON'T TAKE IT PERSONALLY.",
            "",
            "   YOURS TRULY,",
            "   THIS GREAT NATION"
            
        ];
        
        this.line = [];
        
        this.index_W = 0;
        this.index_L = 0;
        
        this.delay_W = 100;
        this.delay_L = 400;
        
    },
    
    create: function(){

        this.bg = game.add.image( 0, 0, 'statsBG' );
            this.bg.scale.set( 10 );
            this.bg.inputEnabled = true;
            
        this.bloodSplatter = game.make.image( 0, 0, 'blood' );
            this.bloodSplatter.scale.set( 10 );
            this.bloodSplatter.inputEnabled = true;
            this.bloodSplatter.events.onInputDown.add( function(){ game.state.start( 'load' ); }, this );
        
        this.totalPassed = game.make.bitmapText( 205, 100, 'affectFont', 'TOTAL PASSED: '  + GreatNation.total.passed );
        this.totalVetoed = game.make.bitmapText( 205, 140, 'affectFont', 'TOTAL VETOED: ' + GreatNation.total.vetoed );
        
        this.text = game.add.bitmapText( 18, 160, 'newsFont', '' );
        
        this.addLine();
    
    },
    
    addLine: function(){
        
        if( this.index_L == this.lines.length ){
            
            this.bg.events.onInputDown.add( function(){
                
                game.add.existing( this.bloodSplatter );
                game.add.existing( this.totalPassed );
                game.add.existing( this.totalVetoed );
                
            }, this );
            
            return;
            
        }
        
        this.line = this.lines[ this.index_L ].split( ' ' );
        
        this.index_W = 0;
        
        game.time.events.repeat( this.delay_W, this.line.length, this.addWord, this );
        
        this.index_L++;
        
    },
    
    addWord: function(){
        
        this.text.text = this.text.text.concat( this.line[ this.index_W ] + " " );
        
        this.index_W++;
        
        if( this.index_W == this.line.length ){
            
            this.text.text = this.text.text.concat( "\n" );
            
            game.time.events.add( this.delay_L, this.addLine, this );
            
        }
        
    }

};