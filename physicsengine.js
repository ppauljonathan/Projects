var a=document.getElementById("area");
var c=document.getElementById("physicsObject"),t=1;
var walls=0;
function switcheroo()
{
    if(walls==0)
        {walls=1;document.getElementById("wall-toggle").style.backgroundColor="green";}
    else
        {walls=0;document.getElementById("wall-toggle").style.backgroundColor="#ddd";}
}
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
         else if(k=="w"||k=="W")
         {switcheroo();}
    }
    flatTorus()
    {
        if(this.x<0){this.x=a.clientWidth-c.clientWidth+this.x;}
        else if(this.x>a.clientWidth-c.clientWidth){this.x=a.clientWidth-c.clientWidth-this.x;}
        else if(this.y<0){this.y=a.clientHeight-c.clientHeight+this.y;}
        else if(this.y>a.clientHeight-c.clientHeight){this.y=a.clientHeight-c.clientHeight-this.y;}
    }
    wall()
    {
        if(this.x<0||this.x>a.clientWidth-c.clientWidth){this.v_x=0-this.v_x;}
        else if(this.y<0||this.y>a.clientHeight-c.clientHeight){this.v_y=0-this.v_y;}
    }
    posUpdate()
    {
        this.x+=this.v_x;
        this.y+=this.v_y;
        if(walls==1){this.wall();}
        else{this.flatTorus();}
        c.style.left=`${this.x}px`;
        c.style.top=`${this.y}px`;
    }
}
free=new physicsBody(30,30);
setTimeout(function k(){free.posUpdate();setTimeout(k,t);},t);
