function Goal()
{

 this.x = 300;
this.y = 100;
this.width = 100;
this.height = 100;

 //this.draw();

}

Goal.prototype.drawGoal = function()
{
  //  ctx.clearRect(this.x,this.y,widhtHeight,widhtHeight);
    widhtHeight = 100
	ctx.fillStyle = rgb(160,20,55);
	ctx.strokeRect(this.x,this.y,this.width,this.height);
}