let x = 200;
let y = 100;
let displayingStartScreen = true;
let stars = [];
let rocketY = 0;
let velocity = 0;
let crashed = 0;
const gravity = 0.1;

//background setup
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

//start screen display
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
  if (mouseIsPressed) {
    displayingStartScreen = false;
  }
}

function rocket(x, y, s) {
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
}

//fire showing when launching on press
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

function draw() {
  if (displayingStartScreen) {
    startScreen();
  } else {
    background(0, 0, 0);

    //star scenery
    fill(255, 255, 255);
    for (let star of stars) {
      ellipse(star.x, star.y, 1);
    }


    // moon surface
    fill(128, 128, 128);
    rect(0, 533, 700, 100);
    rocket(x, rocketY, 0.4, true);
  }

  // gravity when launching

  if (keyIsPressed) {
    let fireX = x;
    let fireY = rocketY;
    fire(fireX, fireY, 0.4);
    velocity = -3;
  } else {
    //falling when key released

    velocity += gravity;
  }

  rocketY += velocity;
  //landing win!
  if (rocketY >= 339) {
    rocketY = 339; // rocket on moon surface
    velocity = 0;

    console.log("Rocket has landed!");

 console.log("Rocket has landed!");

fill(255);
textSize(47);
    text ("Rocket has landed!",110,280);
    

  }


  //crashing lose !
  /* else if (rocketY >= 339) {
      rocketY = 339; // rocket on moon surface
      velocity =3 ;
      console.log("Rocket has crashed!");

fill(255);
textSize(47);
    text ("Rocket has crashed!",110,280);

  }*/
}
