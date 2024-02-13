let x = 110;
let y = 300;
const speed = 10;
let enemyX = 0;
let enemyY = 0;
let stars = [];

function setup() {
  createCanvas(700, 600);
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
}

//moon

function moon( x,y,s) {
  push ();
  translate(x+100, y-260);
  ellipse(x + 300 * s, y + 30 * s, 100 * s, 100 * s);
pop ();
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
    y + 99 * s+150,
    x + 0 * s,
    y + 124 * s+150,
    x + 29 * s,
    y + 114 * s+150
  );


  triangle(
    x + 0 * s,
    y + 99 * s+300,
    x + 0 * s,
    y + 124 * s+300,
    x + 29 * s,
    y + 114 * s+300
  );

  if (enemyX > 700) {
    enemyX = 0;
  }
}


function draw() {
  background(0, 0, 0);
  rocket(x, y, 0.5);
  moon(x, y, 1);
  enemy(enemyX, enemyY, 1);
  enemyX = enemyX + 5;

  fill (255,255,255);
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
    ellipse(star.x, star.y, 2);
  }

  if (keyIsDown(37)) {
    x = x - speed;
  } else if (keyIsDown(39)) {
    x = x + speed;
  }

  if (keyIsDown(38)) {
    y = y - speed;
  }
}

