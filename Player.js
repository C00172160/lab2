

function Player()
{

 this.x = 100;
 this.y = 100;
 this.Speed = 10;
 this.width = 100;
 this.height = 100;
 //this.draw();

}

Player.prototype.drawPlayer = function()
{
  //  ctx.clearRect(this.x,this.y,widhtHeight,widhtHeight);
    widhtHeight = 100
	ctx.fillStyle = rgb(160,20,55);
	ctx.fillRect(this.x,this.y,widhtHeight,widhtHeight);
}

Player.prototype.checkCollision = function (e){


    var collides=false;
         
                
        if ((this.x < e.x + e.width) &&
        (this.x + this.width > e.x) &&
        (this.y + this.height > e.y) &&
        (this.y < e.y + e.height) )   
        {           
             
            collides = true;
                     
        }
         
        return collides;

}

Player.prototype.moveLeft = function()
{

this.x -= this.Speed;

}
Player.prototype.moveRight = function()
{

this.x += this.Speed;

}
Player.prototype.moveUp = function()
{

this.y -= this.Speed;

}
Player.prototype.moveDown = function()
{

this.y += this.Speed;

}
