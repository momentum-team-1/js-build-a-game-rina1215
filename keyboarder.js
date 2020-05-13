

/* eslint-disable prefer-const, no-unused-vars */
/* globals requestAnimationFrame */


//figure out boundaries of screen/starting game/player's goal/targets/movement of player/
//speed/colors and drawings (square), sounds.


//setting up canvas? isnt this the same as grid?
//var canvas = document.getElementById("canvas");
//var ctx = canvas.getContext("2d");
//var width = canvas.width;
//var height = canvas.height;



// set coins possible locations? 
//var width = 400;
//var height = 400;
//var target = {
 //x: getRandomNumber(width),
//y : getRandomNumber(height)
//};
//--------------------------------------------------
//When we click a button
//$("#canvas").click(function (event) {
  // Click handler code goes here
 //});
//-------------------------------------------------
 //key down event handler
 //$("body").keydown(function (event) {
  //console.log(event.keyCode);
 //});
//-------------------------------------------------

 //movement left right down
 //square or image .prototype.moveLeft = function () {
  //this.x -= 5;
  //this.carElement.css({
  //left: this.x,
  //top: this.y
  //});
 //};
 //square or image.moveUp = function () {
  //this.y -= 5;
  //this.carElement.css({
  //left: this.x,
  //top: this.y
  //});
 //};
 //square or image.moveDown = function () {
  //this.y += 5;
  //this.carElement.css({
  //left: this.x,
  //top: this.y
  //});
 //};
 //Each of these 
//------------------------------------------------
// moving across page
// var canvas = document.getElementById("canvas");
//var ctx = canvas.getContext("2d");
//var position = 0;
//setInterval(function () {
//u ctx.clearRect(0, 0, 200, 200);
//v ctx.fillRect(position, 0, 20, 20);
//w position++;
//x if (position > 200) {
 //position = 0;
 //}
//y }, 30);
//-------------------------------------------------
//convert elements into keycodes into names
//var keyNames = {
  //32: "space",
 // 37: "left",
  //38: "up",
 // 39: "right",
  //40: "down"
 //};
 //$("body").keydown(function (event) {
  //u console.log(keyNames[event.keyCode]);
  //});

  //setting direction
 //quare.prototype.setDirection = function (direction) {
    //if (direction === "up") {
    //this.xSpeed = 0;
    //this.ySpeed = -5;
    //} else if (direction === "down") {
    //this.xSpeed = 0;
    //this.ySpeed = 5;
    //} else if (direction === "left") {
    //this.xSpeed = -5;
    //this.ySpeed = 0;
    //} else if (direction === "right") {
    //this.xSpeed = 5;
    //this.ySpeed = 0;
    //} else if (direction === "stop") {
    //this.xSpeed = 0;
    //this.ySpeed = 0;
    //}
   //};

//I am not sure why is it a class instead of a function. Or a constructor versus a not constructor (this)

class Game {
  constructor () {
    let canvas = document.querySelector('#the-square-game')
    let screen = canvas.getContext('2d')
    let gameSize = { x: canvas.width, y: canvas.height }
    this.player = new Player(gameSize)
    let animate = () => { //binds to global object class game
      this.update()
      this.drawPlayer(context)
      requestAnimationFrame(animate)
    }
    animate()
  }

  drawPlayer (context) {
    console.log('Draw player method called')
    context.fillStyle = '#07BEB8'
    let startingXPosition = this.player.center.x - this.player.size.x / 2
    let startingYPosition = this.player.center.y - this.player.size.y / 2
    let playerWidth = this.player.size.x
    let playerHeight = this.player.size.y
    context.fillRect(startingXPosition, startingYPosition, playerWidth, playerHeight)
  }

  update () {
    // update all the objects

  }
}

class Player {
  constructor (gameSize) {
    this.size = { x: 30, y: 30 }
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }
    this.keyboarder = Keyboarder
  }

  update () {
    if ("arrow right key") {
      console.log("MOVE RIGHT")
    } else if ("arrow left key") {
      console.log("MOVE LEFT")
    }
  }
}



