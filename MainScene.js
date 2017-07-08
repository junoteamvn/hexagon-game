var Cell = require('Cell');

cc.Class({
    extends: cc.Component,

    properties: {
        // ...
        color: new cc.Color(255, 255, 255, 255),
        diameter: 100,
        grid: [],
        cells:[]
    },

    // use this for initialization
    onLoad: function () {
        this.graphics = this.node.addComponent(cc.Graphics);
        this.graphics.lineWidth = 2;
        this.initCells();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.drawGrid();
        this.drawCells();
        
    },
    drawGrid: function (){
        this.graphics.clear();
        var orgX=this.node.width/2;
        var orgY=this.node.height/2;
        var cellSpaceX=4*this.diameter/4;
        var cellSpaceY=3*this.diameter/4;
        var spacing = this.diameter/4;
        
       for (var x = orgX - 4*this.diameter ; x <= orgX + 4*this.diameter ; x = x + this.diameter){
           //for (y = 0; y < this.node.height ; y=y+5){
               this.graphics.moveTo(x, 0);
               this.graphics.lineTo(x, this.node.height);
               this.graphics.strokeColor = new cc.Color(255, 255, 255, 50);
               this.graphics.stroke();
           //}
       }
       for (var y = orgY - 4*this.diameter ; y <= orgY + 4*this.diameter ; y = y + this.diameter){
           //for (y = 0; y < this.node.height ; y=y+5){
               this.graphics.moveTo(0, y);
               this.graphics.lineTo(this.node.width, y);
               this.graphics.strokeColor = new cc.Color(255, 255, 255, 50);
               this.graphics.stroke();
           //}
       }
    },
    initCells: function(){
        var cell = null;
        var spacing= this.diameter/4;
        for (var j=-4; j<=4; j=j+2){
            for(var i= -(4 - Math.abs(j)/2); i<=(4 - Math.abs(j)/2); i++ ){
                cell = new Cell();
                cell.centerY=j*3*spacing;
                cell.centerX=2*i*2*spacing;
                cell.calculatePoints();
                this.cells.push(cell);
            }
        }
        for ( j=-3; j<=3; j=j+2){
            for( i= -(5 - (Math.abs(j)+1)/2); i<=(5 - (Math.abs(j)+1)/2); i++ ){
                if (i===0) continue;
                cell = new Cell();
                cell.centerY=j*3*spacing;
                cell.centerX=(2*i-Math.sign(i))*2*spacing;
                cell.calculatePoints();
                this.cells.push(cell);
            }
        }
    },
    drawCells: function(){
        var g = this.node.addComponent(cc.Graphics);
        var orgX=this.node.width/2;
        var orgY=this.node.height/2;
        for (var index = 0; index < this.cells.length; index++) {
            var cell = this.cells[index];
            if (cell instanceof Cell) {
                cell.draw(g, orgX, orgY);
            }
        }
    }
});
