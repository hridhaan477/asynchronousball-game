var canvas,backgroundImg;
var gameState=0;
var playerCount=0;
var database,form,player,game;
var distance=0;
var allPlayers;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game();
    game.getState();
    game.start();

    
}

function draw(){
    background("white");
   if(playerCount===4)
   {
       game.update(1);
       
   }
  if(gameState===1) {
      game.play();
  }
}

