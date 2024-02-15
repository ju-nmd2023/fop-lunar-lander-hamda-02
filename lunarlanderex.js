let x = 200;
let y = 100;
const speed = 10;
let enemyX = 0;
let enemyY = 0;
let stars = [];
let isLaunching = false;
let isCrashing = false;
let gameIsrunning = true;
let rocketY = 100;


function setup() {
  createCanvas(700, 570);
  for (let i = 0; i < 600; i++) {
    const star = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };

    stars.push(star);
  }
}

function rocket(x, y, s) {
  noStroke();

  //rocket

  fill(255, 100, 100);
  rect(x + 42 * s, y + 364 * s, 63 * s, 107 * s);

  //head triangle
  fill(128, 128, 128);

  triangle(
    x + 74 * s,
    y + 339 * s,
    x + 41.5 * s,
    y + 364 * s,
    x + 105.5 * s,
    y + 364 * s
  );

  //window
  fill(128, 128, 128);

  ellipse(x + 74 * s, y + 420 * s, 30 * s, 50 * s);

  quad(
    x + 56 * s,
    y + 471 * s,
    x + 91 * s,
    y + 471 * s,
    x + 99 * s,
    y + 485 * s,
    x + 48 * s,
    y + 485 * s
  );

  //triangle wings
  //left
  triangle(
    x + 42 * s,
    y + 429 * s,
    x + 24 * s,
    y + 462 * s,
    x + 42 * s,
    y + 462 * s
  );
  //right
  triangle(
    x + 105 * s,
    y + 429 * s,
    x + 105 * s,
    y + 462 * s,
    x + 123 * s,
    y + 462 * s
  );

    //moon


    fill (128,128,130);
    ellipse(600 * s, 60 * s, 100 * s, 90 * s);
  
    push ();
    fill(54, 69, 79);
  
    strokeWeight(1);
    ellipse(620 * s, 50 * s, 15 * s, 15 * s);
    ellipse(574 * s, 61 * s, 20 * s, 20 * s);
    ellipse(615 * s, 87 * s, 20 * s, 20 * s);
  
  
  pop (); 
}

function fire(x, y, s) {
  fill(255, 0, 0);
  stroke(255, 100, 0);
  strokeWeight(3);
  triangle(
    x + 55 * s,
    y + 338 * s,
    x + 62 * s,
    y + 353 * s,
    x + 67 * s,
    y + 338 * s
  );
  triangle(
    x + 55 * s + 10,
    y + 338 * s,
    x + 62 * s + 10,
    y + 353 * s,
    x + 67 * s + 10,
    y + 338 * s
  );
}

//moving obstacle

function enemy(x, y, s) {
  fill(0, 110, 100);
  triangle(
    x + 0 * s,
    y + 99 * s,
    x + 0 * s,
    y + 124 * s,
    x + 29 * s,
    y + 114 * s
  );

  triangle(
    x + 0 * s,
    y + 99 * s + 250,
    x + 0 * s,
    y + 124 * s + 250,
    x + 29 * s,
    y + 114 * s + 250
  );

  if (enemyX > 700) {
    enemyX = 0;
  }
}

function draw() {
  background(0, 0, 0);
  rocket(x, rocketY, 0.9);
  enemy(enemyX, enemyY, 1);
  enemyX = enemyX + 5;

  fill(255, 255, 255);
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
    ellipse(star.x, star.y, 1);
  }



  //fire position when launching
  if (isLaunching) {
    let fireX = x + 5 * 0.9;
    let fireY = y + 148 * 0.9;
    fire(fireX, fireY, 0.9);
  }
  if (keyIsDown(32)) {
    rocketY = rocketY - speed;

    isLaunching = true;
  } else {
    isLaunching = false;
  }

   


  if (rocketY > 570) {
    gameIsRunning = false;
    console.log("Game Over");
  }
}
