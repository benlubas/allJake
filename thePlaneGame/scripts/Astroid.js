function Astroid(pos, velMag, playerPos) {
  this.pos = pos;
  this.radius = 3;
  this.vel = new Vector(
    velMag,
    getAngleDeg(this.pos, playerPos) + ran(-10, 10),
    getQuadrent(this.pos, playerPos)
  );

  this.move = function() {
    this.pos.addVect(this.vel);
  };
  this.draw = function() {
    circle(true, this.pos.x, this.pos.y, this.radius, "white", 1);
  };
}
