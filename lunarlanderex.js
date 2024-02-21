let x = 200;
let y = 100;
let stars = [];
let rocketY = 0;
let velocity = 0;
let crashed = false;
const gravity = 0.1;
let screen = "start";

// Background setup
function setup() {
  createCanvas(700, 618);
  for (let i = 0; i < 1000; i++) {
    const star = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
    stars.push(star);
  }
}

// Main draw loop
function draw() {
  if (screen === "start") {
    startScreen();
  } else if (screen === "game") {
    gameScreen();
  } else if (screen === "result") {
    resultScreen();
  }
}

// Display the start screen
function startScreen() {
  background(255, 182, 193);
  textSize(30);
  noStroke();
  fill(128, 128, 128);
  rect(230, 280, 190, 70, 100);
  fill(0, 0, 0);
  strokeWeight(2);
  textFont("Courier New");
  text("START", 280, 320);
}

// Handle key presses
function keyPressed() {
  if (keyCode === 13 && screen === "start") {
    screen = "game";
  }
}

// Draw the rocket
function rocket(x, y, s) {
  noStroke();
  fill(255, 100, 100);
  rect(x + 42 * s, y + 364 * s, 63 * s, 107 * s);
  fill(100, 88, 189);
  triangle(
    x + 74 * s,
    y + 339 * s,
    x + 41.5 * s,
    y + 364 * s,
    x + 105.5 * s,
    y + 364 * s
  );
  fill(100, 88, 189);
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
  triangle(
    x + 42 * s,
    y + 429 * s,
    x + 24 * s,
    y + 462 * s,
    x + 42 * s,
    y + 462 * s
  );
  triangle(
    x + 105 * s,
    y + 429 * s,
    x + 105 * s,
    y + 462 * s,
    x + 123 * s,
    y + 462 * s
  );
}

// Display fire when launching
function fire(x, y, s) {
  push();
  fill(255, 0, 0);
  stroke(255, 100, 0);
  strokeWeight(3);
  triangle(
    x + 60 * s,
    y + 487 * s + 2,
    x + 68 * s,
    y + 502 * s + 2,
    x + 73 * s,
    y + 487 * s + 2
  );
  triangle(
    x + 72 * s,
    y + 487 * s + 2,
    x + 81 * s,
    y + 502 * s + 2,
    x + 86 * s,
    y + 487 * s + 2
  );
  pop();
}

// Game screen logic
function gameScreen() {
  background(0);
  fill(255, 255, 255);
  for (let star of stars) {
    ellipse(star.x, star.y, 1);
  }
  fill(128, 128, 128);
  rect(0, 533, 700, 100);
  rocket(x, rocketY, 0.4, true);
  if (keyIsPressed) {
    let fireX = x;
    let fireY = rocketY;
    fire(fireX, fireY, 0.4);
    velocity = -3;
  } else {
    velocity += gravity;
  }
  rocketY += velocity;
  if (rocketY >= 339) {
    rocketY = 339;
    velocity = 0;
    crashed = true;
    screen = "result";
  }
}
 


// Result screen logic
function resultScreen() {
  console.log("Game Over!");
  fill(255);
  textSize(47);
  if (crashed) {
    text("Rocket has crashed!", 110, 280);
  } else {
    text("Rocket has landed!", 110, 280);
  }
}

