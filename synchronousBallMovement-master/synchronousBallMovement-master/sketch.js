var database;
var gameState=0;
var playerCount=0;
var game,player,form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.start();
}