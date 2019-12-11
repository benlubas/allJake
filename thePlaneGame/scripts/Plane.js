function Plane(x, y, color) {
  this.pos = new Point(x, y);
  this.color = color;
  this.radius = 5;

  this.draw = function() {
    // filled, x, y, radius, color, weight
    circle(true, this.pos.x, this.pos.y, this.radius, this.color, 2);
  };
  this.move = function(speed) {
    this.pos.add(WASD_Move(speed));
  };
}
