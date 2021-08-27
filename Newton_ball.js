class Newton_Ball {
    constructor(x,y,r){
        /* add a options so we can descirbe
         how the ball should act*/
         var options ={
             isStatic:false,
             restitution:1.5,
             friction:0,
             density:1
         }

         //define the parameters
         this.x = x;
         this.y = y;
         this.r = r;

         //add matter.body to the ball
         this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
         World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        fill("blue");
        ellipse(0,0,this.r,this.r);
        pop()

    }
}