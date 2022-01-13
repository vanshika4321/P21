class  Ground{
    constructor(x,y,w,h){
        var Options = {
            isStatic : true 
        }
        this.body = Bodies.rectangle(x,y,w,h,Options);
        World.add(world,this.body);
        this.x = x ;
        this.y = y ;
        this.w = w ; 
        this.h = h ;
    }
    display(){
        //var groundPos 
        rect(this.x,this.y,this.w,this.h)
    }
}