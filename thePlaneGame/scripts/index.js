/* RECORD:
  -- 34 Seconds: Ben Lubas (Dec 13, 2019); 
  -- 32 Seconds: Ben Lubas (Dec 10, 2019)
  -- 27 Seconds: Jake Valentine (Dec 12, 2019)
  -- 21 Seconds: Ben Lubas
*/

const currentURL = window.location.href;

const gamerule = {
  color: "red",
  playerSpeed: 2.25,
  ...urlParser(currentURL)
};

const cWidth = 400;
createCanvas(cWidth, cWidth);
con = getCon();

let score = 0;
let gameover = false;

const getSpawnLoc = function() {
  let q = either(ran(-20, 0), ran(cWidth, cWidth + 20));
  let r = ran(0, cWidth);

  return either(new Point(q, r), new Point(r, q));
};
const spawn = function(playerPos) {
  a.push(new Astroid(getSpawnLoc(), random(1, 1.5), playerPos));
};

let player = new Plane(200, 200, gamerule.color, gamerule.playerSpeed);
let a = [];
for (let i = 0; i < 10; i++) {
  spawn(player.pos);
}

const update = function() {
  player.move(gamerule.playerSpeed);
  for (let i = 0; i < a.length; i++) {
    a[i].move();
  }

  //check collisions
  for (let i = 0; i < a.length; i++) {
    if (
      a[i].pos.dist(player.pos) < player.radius + a[i].radius ||
      player.pos.x > 400 ||
      player.pos.x < 0 ||
      player.pos.y > 400 ||
      player.pos.y < 0
    ) {
      gameover = true;
    }
  }
};
const draw = function() {
  background("#414141", cWidth, cWidth);
  player.draw();
  for (let i = 0; i < a.length; i++) {
    a[i].draw();
  }

  if (gameover) {
    background("#00000075", cWidth, cWidth);
    canvasText(
      "Game Over",
      new Point(cWidth / 2, 200),
      "Times New Roman",
      50,
      "#DD3333"
    );
    canvasText(
      "Score: " + Math.floor(score / 60),
      new Point(cWidth / 2, 235),
      "Times New Roman",
      20,
      "#DD3333"
    );
    clearInterval(spawnLoop);
    clearInterval(animLoop);
  }
};
let spawnLoop;
let animLoop;
draw();
draw_WASD(new Point(170, 50));
canvasText(
  "Use WASD To Move",
  new Point(cWidth / 2, 240),
  "times",
  20,
  gamerule.color
);
canvasText(
  "Press W A S or D to Start",
  new Point(cWidth / 2, 275),
  "times",
  20,
  gamerule.color
);
const waiting = setInterval(() => {
  if (waiting && (k.w || k.a || k.s || k.d)) {
    start();
    clearInterval(waiting);
  }
}, 1000 / 60);
const start = () => {
  spawnLoop = setInterval(() => {
    spawn(player.pos);
  }, 1000 / 13);

  animLoop = setInterval(() => {
    update();
    draw();
    score++;
  }, 1000 / 60);
};
