function MovingObject(obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
}

MovingObject.prototype.draw = function(ctx) {

  ctx.beginPath();
  ctx.arc(
    this.pos[0], 
    this.pos[1], 
    this.radius,
    0, 
    (2*Math.PI), 
    true 
  );
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

module.exports = MovingObject;