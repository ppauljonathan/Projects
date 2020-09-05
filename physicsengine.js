var a=document.getElementById("area");
var c=a.getContext("2d"),t=1;
c.fillStyle="#fff";
class physicsBody
{
    constructor(x,y,m=1)
    {
        this.x=x;this.y=y;this.m=m;
        this.v_x=0;this.v_y=0;this.width=a.width/100;
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
        if(this.x<0){this.x=a.width-this.width;}
        else if(this.x>a.width-this.width){this.x=0;}
        else if(this.y<0){this.y=a.height-this.width;}
        else if(this.y>a.height-this.width){this.y=0;} 
    } 
    posUpdate()
    {
        c.clearRect(0,0,a.width,a.height);
        this.x+=this.v_x;
        this.y+=this.v_y;
        this.flatTorus();
        c.fillRect(this.x,this.y,this.width,this.width);
    }
}
free=new physicsBody(30,30);
setTimeout(function k(){free.posUpdate();setTimeout(k,t);},t);
