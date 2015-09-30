var canvas;
var ctx;
var widhtHeight;

function Game()
{

 initCanvas();
  this.player = new Player();
  this.goal = new Goal();

}

Game.prototype.test = function(e)
{

	console.log("test");
	console.log(e.keyCode);
}

Game.prototype.gameLoop = function()
{
  //player.draw();
  game.draw();
console.log("gameLoop");
game.CheckForCollisions();
window.requestAnimationFrame(game.gameLoop);


}
Game.prototype.CheckForCollisions = function(){

	if (this.player.checkCollision(this.goal)==true)
	{
	   game.CollisionResponce();

	}

}
Game.prototype.draw = function()
{

	ctx.clearRect(0,0,canvas.width,canvas.height)
 this.player.drawPlayer();
 this.goal.drawGoal();
  
}
function initCanvas(){

 canvas= document.createElement("canvas");
 ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


}
Game.prototype.Input = function(e){

	var input = e.keyCode;

	game.moveplayer(input);

	

		}

Game.prototype.moveplayer = function(e){

    if (e == 87)
	{
		this.player.moveUp();
	}
		else if (e == 83)
	{
		this.player.moveDown();
	}
	else if (e == 97)
	{
		this.player.moveLeft();
	}
    else if (e == 100)
    {
		this.player.moveRight();
	}


		}


Game.prototype.CollisionResponce = function(){

ctx.save();
//add in your own colour
ctx.fillStyle=  rgb(0,0,0);
//change this
ctx.font = 'italic 40pt Calibri';
//otherwise bottom
ctx.textBaseline = "top";
//Put your message here; x and y are where the message will appear...
ctx.fillText("Congrats, you have won the game",100,100);
//Any idea what save and restore do?
ctx.restore();
		}

function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}




