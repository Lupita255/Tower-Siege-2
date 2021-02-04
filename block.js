class Block{ 
    constructor(x,y,w,h){
    this.body =Bodies. rectangle (x,y,w,h) 
    this.width=w;
    this.height=h;
    World.add(world,this.body)
    this.visibility = 225;
    }  
    display(){
        if(this.body.speed < 2.5){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("pink")
            rect(0,0,this.width, this.height);
            pop();
            }
            
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility -5;
            pop();
            
          }
    }    
    }