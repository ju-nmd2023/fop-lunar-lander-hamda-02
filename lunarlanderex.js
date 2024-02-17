let x = 200;
let y = 100;
const speed = 10;
let enemyX = 0;
let enemyY = 0;
let stars = [];
let rocketY = 145;
let isLaunching = false;
let velocity = 0;
let crashed = 0;
const gravity = 0.9;

function setup() {
  createCanvas(700, 618);
  for (let i = 0; i < 700; i++) {
    const star = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };

    stars.push(star);
  }
}

function rocket(x, y, s, isLaunching) {
  noStroke();

  //rocket

  fill(255, 100, 100);
  rect(x + 42 * s, y + 364 * s, 63 * s, 107 * s);

  //head triangle
  fill(100, 88, 189);

  triangle(
    x + 74 * s,
    y + 339 * s,
    x + 41.5 * s,
    y + 364 * s,
    x + 105.5 * s,
    y + 364 * s
  );

  //window

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

  //fire showing when launching

  if (isLaunching === true) {
    push();
    fill(255, 0, 0);
    stroke(255, 100, 0);
    strokeWeight(3);
    triangle(
      x + 60 * s,
      y + 487 * s,
      x + 68 * s,
      y + 502 * s,
      x + 73 * s,
      y + 487 * s
    );
    triangle(
      x + 72 * s,
      y + 487 * s,
      x + 81 * s,
      y + 502 * s,
      x + 86 * s,
      y + 487 * s
    );
    pop();
  } else {
    clear();
  }

  // moon surface
  fill(128, 128, 128);
  rect(0, 533, 700, 100);
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

  if (enemyX > 660) {
    enemyX = 0;
  }
}

function draw() {
  background(0, 0, 0);
  rocket(x, rocketY, 0.8, true);
  enemy(enemyX, enemyY, 1);
  enemyX = enemyX + 5;

  //star scenery
  fill(255, 255, 255);
  for (let star of stars) {
    ellipse(star.x, star.y, 1);
  }

  //gravity when launching

  rocketY += velocity;
  if (keyIsDown(32)) {
    velocity = -9;
    isLaunching = true;
  } else {
    //falling when key released
    velocity = velocity + gravity;
    isLaunching = false;
  }

  if (rocketY > 533) {
    console.log("crashed");
  }
}
