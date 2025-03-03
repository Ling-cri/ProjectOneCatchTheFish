let fish1 = {
  x : 30,
  y : 50,
  speed : 2 ,
  visible : true,
  leftRight : 'right',

  
  updatePosition: function(){
    //this will check to see where the fish is and determin direction
    //if leftright is 'right' then update pos moving to right and 
    // if leftright is 'left' then update pos moving to the left
    
    this.x += this.speed; //move this fish
    
    if(this.x > width - 30){
      this.speed *= -1;
      this.leftRight = 'left';
    }
    
    if(this.x < -140){
      this.speed *=-1;
      this.leftRight = 'right';
    }
    },
      
    
  
  display : function () {

      if (!this.visible) {
          return; // Don't draw if fish is not visible
      }

    //check leftright and draw two different ways depending the current state:
  if (this.leftRight == 'right') {

    //put your fish draw code here
    //yellow fish
  noStroke();
  fill('#fcee21');
  quad(this.x+74, this.y+98, this.x+143, this.y+119, this.x+74, this.y+141, this.x+37, this.y+119);
  triangle(this.x+37,this.y+119,this.x+24,this.y+132,this.x+24,this.y+106);
  
  fill('#fbb03b');
  triangle(this.x+74,this.y+98,this.x+42,this.y+98,this.x+57,this.y+109);
  triangle(this.x+74,this.y+141,this.x+42,this.y+141,this.x+62,this.y+133);
  
  fill('white');
  circle(this.x+115,this.y+119,10);
  
  fill('black');
  circle(this.x+117,this.y+119,5);
  
} else if(this.leftRight == 'left'){
  noStroke();
  fill('#fcee21');
  quad(this.x+24, this.y+119, this.x+92, this.y+98, this.x+129, this.y+119, this.x+92, this.y+141);
  triangle(this.x+129,this.y+119,this.x+143,this.y+106,this.x+143,this.y+132);
  
  fill('#fbb03b');
  triangle(this.x+92,this.y+98,this.x+125,this.y+98,this.x+110,this.y+109);
  triangle(this.x+92,this.y+141,this.x+124,this.y+141,this.x+105,this.y+133);
  
  fill('white');
  circle(this.x+50,this.y+119,10);
  
  fill('black');
  circle(this.x+46,this.y+119,5);
}
    
  },
    
  catchfish1 : function() {
    //here you would set visible to false and increase score...
    if (this.visible == true) {
      this.visible = false;
      score = score + 1;

      setTimeout(() => {
        this.resetfish1();
      }, 1000);
    }
  },
  

  resetfish1: function() {
    this.visible = true; // Make the fish reappear
    this.x = random(30, width - 143); // Respawn at a random x position
    this.y = random(-10, height - 141); // Respawn at a random y position
    this.speed = random([-5,-4,-3,3,4,5]); // Random speed (both directions)

    // Set direction based on speed
    if (this.speed > 0) {
        this.leftRight = 'right';
    } else {
        this.leftRight = 'left';
    }
  }

};

let fish2 = {
  x : 0,
  y : 50,
  speed : 3 ,
  visible : true,
  leftRight : 'left',

  
  updatePosition: function(){

    
    this.x -= this.speed; //move this fish
    
    if(this.x <= -520 ){
      this.speed *= -1;
      this.leftRight = 'right';
    }
    
    if(this.x >= width - 577){
      this.speed *=-1;
      this.leftRight = 'left';
    }
    },
      
  
  display : function () {

      if (!this.visible) {
          return; // Don't draw if fish is not visible
      }

    //check leftright and draw two different ways depending the current state:
  if (this.leftRight == 'left') {

    //put your fish draw code here
  //orange fish
  noStroke();
  fill('#ff931e');
  quad(this.x+531, this.y+152, this.x+553, this.y+174, this.x+531, this.y+196, this.x+509, this.y+174);
  triangle(this.x+577,this.y+150,this.x+577,this.y+198,this.x+552,this.y+174);
  
  fill('#f15a24');
  triangle(this.x+531,this.y+152,this.x+550,this.y+152,this.x+539,this.y+160);
  triangle(this.x+539,this.y+188,this.x+531,this.y+196,this.x+550,this.y+190);
  
  fill('white');
  circle(this.x+522,this.y+175,10);
  
  fill('black');
  circle(this.x+520,this.y+175,5);
  
} else if(this.leftRight == 'right'){
  noStroke();
  fill('#ff931e');
  quad(this.x+577, this.y+174, this.x+555, this.y+196, this.x+533, this.y+174, this.x+555, this.y+152);
  triangle(this.x+534,this.y+174,this.x+509,this.y+198,this.x+509,this.y+150);
  
  fill('#f15a24');
  triangle(this.x+555,this.y+152,this.x+547,this.y+160,this.x+536,this.y+152);
  triangle(this.x+555,this.y+196,this.x+536,this.y+196,this.x+547,this.y+188);
  
  fill('white');
  circle(this.x+562,this.y+170,10);
  
  fill('black');
  circle(this.x+565,this.y+172,5);
}
    
  },
    
  catchfish2 : function() {
    //here you would set visible to false and increase score...
    if (this.visible == true) {
      this.visible = false;
      score = score + 1;

      setTimeout(() => {
        this.resetfish2();
      }, 1000);
    }
  },
  

  resetfish2: function() {
    this.visible = true; // Make the fish reappear
    this.x = random(-520, width - 577); // Respawn at a random x position
    this.y = random(-100, height - 200); // Respawn at a random y position
    this.speed = random([-3,2,3,4]); // Random speed (both directions)

    // Set direction based on speed
    if (this.speed > 0) {
        this.leftRight = 'left';
    } else {
        this.leftRight = 'right';
    }
    
  }

};

let fish3 = {
  x : -100,
  y : 100,
  // tx: 30,//offset from x y of fish for center of target (circle) that user clicks on
  // ty: 30,//offset from x y of fish for center of target (circle) that user clicks on
  // // tr: 50,//radius of target circle
  speed : 4 ,
  visible : true,
  leftRight : 'right',

  
  updatePosition: function(){
    //this will check to see where the fish is and determin direction
    //if leftright is 'right' then update pos moving to right and 
    // if leftright is 'left' then update pos moving to the left
    
    this.x += this.speed; //move this fish
    
    if(this.x > width - 100){
      this.speed *= -1;
      this.leftRight = 'left';
    }
    
    if(this.x < -180){
      this.speed *=-1;
      this.leftRight = 'right';
    }
    },
      
    
  
  display : function () {

      if (!this.visible) {
          return; // Don't draw if fish is not visible
      }

    //check leftright and draw two different ways depending the current state:
  if (this.leftRight == 'right') {

    //put your fish draw code here
    //blue fish
  noStroke();
  fill('#3FA9F5');
  quad(this.x+219, this.y+220, this.x+182, this.y+241, this.x+145, this.y+220, this.x+182, this.y+199);
  triangle(this.x+145,this.y+220,this.x+138,this.y+235,this.x+138,this.y+204);
  
  fill('#0071BC');
  triangle(this.x+182,this.y+241,this.x+162,this.y+241,this.x+174,this.y+237);
  triangle(this.x+182,this.y+199,this.x+138,this.y+199,this.x+166,this.y+208);
  
  fill('white');
  circle(this.x+194,this.y+219,12);
  
  fill('black');
  circle(this.x+195,this.y+220,6);
  
} else if(this.leftRight == 'left'){
  noStroke();
  fill('#3FA9F5');
  quad(this.x+138, this.y+220, this.x+175, this.y+198, this.x+212, this.y+220, this.x+175, this.y+241);
  triangle(this.x+212,this.y+220,this.x+219,this.y+235,this.x+219,this.y+204);
  
  fill('#0071BC');
  triangle(this.x+175,this.y+198,this.x+218,this.y+198,this.x+191,this.y+209);
  triangle(this.x+175,this.y+241,this.x+194,this.y+241,this.x+182,this.y+237);
  
  fill('white');
  circle(this.x+159,this.y+220,12);
  
  fill('black');
  circle(this.x+160,this.y+219,6);
}
    
  },
    
  catchfish3 : function() {
    //here you would set visible to false and increase score...
    if (this.visible == true) {
      this.visible = false;
      score = score + 1;

      setTimeout(() => {
        this.resetfish3();
      }, 1000);
    }
  },
  

  resetfish3: function() {
    this.visible = true; // Make the fish reappear
    this.x = random(-100, width - 219); // Respawn at a random x position
    this.y = random(-100, height - 250); // Respawn at a random y position
    this.speed = random([-5,-4,-3,3]); // Random speed (both directions)

    // Set direction based on speed
    if (this.speed > 0) {
        this.leftRight = 'right';
    } else {
        this.leftRight = 'left';
    }
  }

};

let fish4 = {
  x : 550,
  y : -50,
  speed : 2 ,
  visible : true,
  leftRight : 'left',

  
  updatePosition: function(){
    //this will check to see where the fish is and determin direction
    //if leftright is 'right' then update pos moving to right and 
    // if leftright is 'left' then update pos moving to the left
    
    this.x -= this.speed; //move this fish
    
    if(this.x > width - 30){
      this.speed *= -1;
      this.leftRight = 'left';
    }
    
    if(this.x < -51){
      this.speed *=-1;
      this.leftRight = 'right';
    }
    },
      
    
  
  display : function () {

      if (!this.visible) {
          return; // Don't draw if fish is not visible
      }

    //check leftright and draw two different ways depending the current state:
  if (this.leftRight == 'right') {

    //put your fish draw code here
    //pink fish
  noStroke();
  fill('#FF7BAC');
  quad(this.x+51, this.y+298, this.x+40, this.y+312, this.x+30, this.y+297, this.x+39, this.y+282);
  triangle(this.x+30,this.y+297,this.x+27,this.y+307,this.x+27,this.y+286);
  
  fill('#ED1E79');
  triangle(this.x+40,this.y+312,this.x+30,this.y+312,this.x+36,this.y+306);
  triangle(this.x+39,this.y+282,this.x+24,this.y+282,this.x+37,this.y+287);
  
  fill('white');
  circle(this.x+42,this.y+298,6);  
    
  fill('black');
  circle(this.x+43,this.y+298,4);
  
} else if(this.leftRight == 'left'){
  noStroke();
  fill('#FF7BAC');
  quad(this.x+22, this.y+297, this.x+34, this.y+282, this.x+42, this.y+297, this.x+34, this.y+312);
  triangle(this.x+42,this.y+297,this.x+46,this.y+307,this.x+46,this.y+286);
  
  fill('#ED1E79');
  triangle(this.x+34,this.y+282,this.x+51,this.y+282,this.x+36,this.y+287);
  triangle(this.x+34,this.y+311,this.x+43,this.y+311,this.x+37,this.y+306);
  
  fill('white');
  circle(this.x+29,this.y+296,6);
  
  fill('black');
  circle(this.x+28,this.y+296,4);
}
    
  },
    
  catchfish4 : function() {
    //here you would set visible to false and increase score...
    if (this.visible == true) {
      this.visible = false;
      score = score + 1;

      setTimeout(() => {
        this.resetfish4();
      }, 1000);
    }
  },
  

  resetfish4: function() {
    this.visible = true; // Make the fish reappear
    this.x = random(-30, width - 50); // Respawn at a random x position
    this.y = random(-200, height - 300); // Respawn at a random y position
    this.speed = random([-4,-3,3,4]); // Random speed (both directions)

    // Set direction based on speed
    if (this.speed > 0) {
        this.leftRight = 'left';
    } else {
        this.leftRight = 'right';
    }
  }

};

let fish5 = {
  x : 30,
  y : -50,
  speed : 2 ,
  visible : true,
  leftRight : 'right',

  
  updatePosition: function(){
    //this will check to see where the fish is and determin direction
    //if leftright is 'right' then update pos moving to right and 
    // if leftright is 'left' then update pos moving to the left
    
    this.x += this.speed; //move this fish
    
    if(this.x > width - 88){
      this.speed *= -1;
      this.leftRight = 'left';
    }
    
    if(this.x < -49){
      this.speed *=-1;
      this.leftRight = 'right';
    }
    },
      
    
  
  display : function () {

      if (!this.visible) {
          return; // Don't draw if fish is not visible
      }

    //check leftright and draw two different ways depending the current state:
  if (this.leftRight == 'right') {

    //put your fish draw code here
    //yellow fish
  noStroke();
  fill('#7AC943');
  quad(this.x+96, this.y+358, this.x+76, this.y+378, this.x+56, this.y+358, this.x+76, this.y+339);
  triangle(this.x+56,this.y+358,this.x+49,this.y+366,this.x+49,this.y+351);
  
  fill('#009245');
  triangle(this.x+76,this.y+378,this.x+58,this.y+378,this.x+68,this.y+371);
  triangle(this.x+76,this.y+339,this.x+58,this.y+339,this.x+68,this.y+346);
  
  fill('white');
  circle(this.x+82,this.y+358,7);
  
  fill('black');
  circle(this.x+84,this.y+358,5);
  
} else if(this.leftRight == 'left'){
  noStroke();
  fill('#7AC943');
  quad(this.x+49, this.y+358, this.x+68, this.y+339, this.x+88, this.y+358, this.x+68, this.y+378);
  triangle(this.x+88,this.y+358,this.x+96,this.y+351,this.x+96,this.y+366);
  
  fill('#009245');
  triangle(this.x+68,this.y+339,this.x+86,this.y+339,this.x+76,this.y+346);
  triangle(this.x+68,this.y+378,this.x+86,this.y+378,this.x+76,this.y+371);
  
  fill('white');
  circle(this.x+62,this.y+358,7);
  
  fill('black');
  circle(this.x+60,this.y+358,5);
}
    
  },
    
  catchfish5 : function() {
    //here you would set visible to false and increase score...
    if (this.visible == true) {
      this.visible = false;
      score = score + 1;

      setTimeout(() => {
        this.resetfish5();
      }, 1000);
    }
  },
  

  resetfish5: function() {
    this.visible = true; // Make the fish reappear
    this.x = random(-49, width - 88); // Respawn at a random x position
    this.y = random(-220, height - 378); // Respawn at a random y position
    this.speed = random([-4,-3,3,4]); // Random speed (both directions)

    // Set direction based on speed
    if (this.speed > 0) {
        this.leftRight = 'right';
    } else {
        this.leftRight = 'left';
    }
  }

};

let bubble1 = {
  x: 100,
  y: 0,
  

  displayBubble1: function () {
    noStroke();
    fill('#D9FEFF');
    circle(this.x + 530 , this.y + 350 , 10 );
    circle(this.x + 560 , this.y + 330 , 5 );
    circle(this.x + 540 , this.y + 330 , 15 );
    circle(this.x + 550 , this.y + 360 , 20 );
    circle(this.x + 530 , this.y + 400 , 15 );
    circle(this.x + 560 , this.y + 430 , 8 );
    circle(this.x + 540 , this.y + 420 , 13 );
    circle(this.x + 550 , this.y + 460 , 28 );
  },

  updatePosition: function(){
    this.y = this.y - 1;
    if(this.y <-400){
      this.y = 0;
    }
  }
};

let bubble2 = {
  x: 50,
  y: 300,
  

  displayBubble2: function () {
    noStroke();
    fill('#D9FEFF');
    circle(this.x + 150 , this.y + 350 , 8 );
    circle(this.x + 130 , this.y + 320 , 10 );
    circle(this.x + 150 , this.y + 330 , 15 );
    circle(this.x + 150 , this.y + 360 , 25 );
    circle(this.x + 130 , this.y + 400 , 10 );
    circle(this.x + 160 , this.y + 380 , 5 );
    circle(this.x + 140 , this.y + 390 , 15 );
    circle(this.x + 150 , this.y + 430 , 25 );
  },

  updatePosition: function(){
    this.y = this.y - 1;
    if(this.y <-400){
      this.y = 0;
    }
  }
};

let score = 0;

let gameState = "start";
// let gameOver = false;
let startTime;

let startX = 500;
let startY = 140;
let startWidth = 207;
let startHeight = 120;

let endX = 470;
let endY = 190;
let endWidth = 190;
let endHeight = 120;

let startImg, endImg;

function preload(){
  startImg = loadImage('Start.jpg');
  endImg = loadImage('End.jpg');
}



function setup() {
  createCanvas(800, 400);
  startTime = millis();
  
}

function draw() {

  if (gameState === "start"){


    image(startImg, 0,0,width,height);
  
      if (mouseX >= startX && mouseX <= startX + startWidth &&
      mouseY >= startY && mouseY <= startY + startHeight
    ) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }

  }
  else if (gameState === "playing"){

  cursor(ARROW);
  
  background('#bdfaff');


  bubble1.displayBubble1();
  bubble1.updatePosition();

  bubble2.displayBubble2();
  bubble2.updatePosition();

  //call the update and display functions of your fish
  fish1.updatePosition(); // Move fish
  fish1.display(); // Draw fish

  fish2.updatePosition(); 
  fish2.display();
  
  fish3.updatePosition(); 
  fish3.display();
  
  fish4.updatePosition(); 
  fish4.display();
  
  fish5.updatePosition(); 
  fish5.display();
  
  //display score
  textFont('Arial');
  textStyle('bold');
  fill('#F7931E');
  textSize(50);
  textAlign(CENTER, TOP);
  text(score,width /2,10);

  if ((millis() - startTime) / 1000 >=30){
    gameState = "gameOver";
  }

  } else if (gameState === "gameOver"){
      image(endImg,0,0,width,height);

      if (
        mouseX >= endX && mouseX <= endX + endWidth &&
        mouseY >= endY && mouseY <= endY + endHeight
      ) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
    }

}


function mousePressed() {
  if (gameState === "start") {
    // Check if the mouse clicks inside the start button
    if (
      mouseX >= startX && mouseX <= startX + startWidth &&
      mouseY >= startY && mouseY <= startY + startHeight
    ) {
      startGame(); // Start the game
    }
    return;
  }

  if(gameState === "gameOver"){
    if (
      mouseX >= endX && mouseX <= endX + endWidth &&
      mouseY >= endY && mouseY <= endY + endHeight
    ) {
      restartGame();
    }
    return;
  }

  if (gameState === "playing"){

  // Define bounding box limits
  let fish1Left = fish1.x + 24;  // Adjust these based on your fish shape
  let fish1Right = fish1.x + 143;
  let fish1Top = fish1.y + 98;
  let fish1Bottom = fish1.y + 141;
  
  let fish2Left = fish2.x + 509 ;  
  let fish2Right = fish2.x + 577;
  let fish2Top = fish2.y +152 ;
  let fish2Bottom = fish2.y + 196;
  
  let fish3Left = fish3.x + 138;  
  let fish3Right = fish3.x + 240;
  let fish3Top = fish3.y + 210;
  let fish3Bottom = fish3.y + 241;
  
  let fish4Left = fish4.x + 27;  
  let fish4Right = fish4.x + 51;
  let fish4Top = fish4.y + 297;
  let fish4Bottom = fish4.y + 312;

  let fish5Left = fish5.x + 49;  
  let fish5Right = fish5.x + 88;
  let fish5Top = fish5.y + 339;
  let fish5Bottom = fish5.y + 378;

    
  if (mouseX >= fish1Left && mouseX <= fish1Right && mouseY >= fish1Top && mouseY <= fish1Bottom){
    fish1.catchfish1();
  } else if (mouseX >= fish2Left && mouseX <= fish2Right && mouseY >= fish2Top && mouseY <= fish2Bottom){
    fish2.catchfish2();
  } else if (mouseX >= fish3Left && mouseX <= fish3Right && mouseY >= fish3Top && mouseY <= fish3Bottom){
    fish3.catchfish3();
  } else if (mouseX >= fish4Left && mouseX <= fish4Right && mouseY >= fish4Top && mouseY <= fish4Bottom){
    fish4.catchfish4();
} else if (mouseX >= fish5Left && mouseX <= fish5Right && mouseY >= fish5Top && mouseY <= fish5Bottom){
    fish5.catchfish5();
}
}

function startGame() {
  gameState = "playing"; // Change state to playing
  startTime = millis(); // Reset timer
  score = 0; // Reset score
}

function restartGame() {
  gameState = "playing";
  startTime = millis(); // Reset timer
  score = 0; // Reset score

  // Reset fish positions
  fish1.resetfish1();
  fish2.resetfish2();
  fish3.resetfish3();
  fish4.resetfish4();
  fish5.resetfish5();
}
}