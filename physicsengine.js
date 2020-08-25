var a=document.getElementById("area");
var c=document.getElementById("physicsObject"),t=1;
class physicsBody
{
    constructor(x,y,m=1)
    {
        this.x=x;this.y=y;this.m=m;
        this.v_x=0;this.v_y=0;
    }
    move(k)
    {
         if(k=="ArrowUp")
         {this.v_y-=1/this.m;}
         else if(k=="ArrowDown")
         {this.v_y+=1/this.m;}
         else if(k=="ArrowLeft")
         {this.v_x-=1/this.m;}
         else if(k=="ArrowRight")
         {this.v_x+=1/this.m;}
         else if(k==" ")
         {this.v_x=0;this.v_y=0;}
    }
    flatTorus()
    {
        if(this.x<0){this.x=a.clientWidth-c.clientWidth;}
        else if(this.x>a.clientWidth-c.clientWidth){this.x=0;}
        else if(this.y<0){this.y=a.clientHeight-c.clientHeight;}
        else if(this.y>a.clientHeight-c.clientHeight){this.y=0;}
    }
    posUpdate()
    {
        this.x+=this.v_x;
        this.y+=this.v_y;
        this.flatTorus();
        c.style.left=`${this.x}px`;
        c.style.top=`${this.y}px`;
    }
}
free=new physicsBody(30,30);
setTimeout(function k(){free.posUpdate();setTimeout(k,t);},t);
