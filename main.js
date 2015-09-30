//gloabal variable
var game;
var player;

function main()
{

  
  game = new Game();
  

  game.gameLoop();

  window.addEventListener("keypress" , game.Input);
  // window.addEventListener("keypress" , game.test);

}

