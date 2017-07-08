var Cell = cc.Class({
    extends: cc.Node,
    properties: {
        centerX: 0,
        centerY: 0,
        diameter:100,
        p0: [0,0],
        p1: [0,0],
        p2: [0,0],
        p3: [0,0],
        p4: [0,0],
        p5: [0,0],
        
    },
    
    calculatePoints: function(){
        //this.g = this.node.addComponent(cc.Graphics);
        var d = 0.9*this.diameter/4;
        ///
        var x=this.centerX;
        var y= this.centerY+2*d;
        this.p0=[x,y];
        
        y = this.centerY-2*d;
        this.p3=[x,y];
        
        //
        x = this.centerX-2*d;
        y = this.centerY+d;
        this.p1=[x,y];
        
        x = this.centerX+2*d;
        this.p5=[x,y];
        
        //
        x = this.centerX-2*d;
        y = this.centerY-d;
        this.p2=[x,y];
        
        x = this.centerX+2*d;
        this.p4=[x,y];
        //
    },
    
    draw: function(g, orgX, orgY) {
        
        g.moveTo(this.p0[0]+orgX,this.p0[1]+orgY);
        g.lineTo(this.p1[0]+orgX,this.p1[1]+orgY);
        g.lineTo(this.p2[0]+orgX,this.p2[1]+orgY);
        g.lineTo(this.p3[0]+orgX,this.p3[1]+orgY);
        g.lineTo(this.p4[0]+orgX,this.p4[1]+orgY);
        g.lineTo(this.p5[0]+orgX,this.p5[1]+orgY);
        g.lineTo(this.p0[0]+orgX,this.p0[1]+orgY);
        g.strokeColor = new cc.Color(255, 255, 255, 50);
        g.stroke();
    }
});
module.exports = Cell;
