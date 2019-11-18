function Snake(x, y, len, color){
  this.x = x; 
  this.y = y; 
  this.len = len;
  this.xDir = 1;
  this.yDir = 0; 
  this.fed = false; 
  this.color = color; 
  this.lock = false; 
  this.inputQ = []; 

  this.positions = [];
}

Snake.prototype.move = function(){
  if (k.w && (this.yDir != 1 || this.len == 1)){
    this.yDir = -1; 
    this.xDir = 0; 
  } 
  if (k.a && (this.xDir != 1 || this.len == 1)) {
    this.xDir = -1; 
    this.yDir = 0; 
  }
  if (k.s && (this.yDir != -1 || this.len == 1)) {
    this.yDir = 1; 
    this.xDir = 0;
  }
  if (k.d && (this.xDir != -1 || this.len == 1)) {
    this.xDir = 1; 
    this.yDir = 0;
  }
  // console.log(this.xDir);
  // console.log(this.yDir);
}
Snake.prototype.update = function(foodPos){
  this.positions.push(new Point(this.x + this.xDir, this.y + this.yDir)); 
  this.x += this.xDir; 
  this.y += this.yDir; 
  console.log(this.positions);
  // if the head is on some food. 
  if(arrIncludesPoint(this.positions, foodPos)){
    this.fed = true; 
    this.len++; 
    foodExists = false; 
  }


  if(!this.fed)
    this.positions.splice(0, 1);
  else{
    this.fed = false; 
  }
}
