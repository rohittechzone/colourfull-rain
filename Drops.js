class Drops{
   
    constructor(x,y,width,height){

     this.body = Bodies.rectangle(random(15,785),random(-40000,-100),random(2,5),random(35,55));
        this.width =  random(2,5);
        this.height = random(35,55);
         World.add(world, this.body);
    }
    display(){
        fill(random(1,255),random(1,255),random(1,255));
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}