function MovingObject(name) { 
  this.name = name;
}

MovingObject.prototype.fly = function(speed) {
  console.log(`${this.name} flaps at ${speed} mph!`)
}

// Surrogate Trick
// Function.prototype.inherits = function (ctx) {
//   const Surrogate = function () { };
//   Surrogate.prototype = ctx.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }

// Object.create 
Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constructor = Ship;

Asteroid.prototype = Object.create(MovingObject.prototype);
Asteroid.prototype.constructor = Asteroid;


function Ship(name) {
  MovingObject.call(this, name)
 }
// Ship.inherits(MovingObject);

function Asteroid(name) { 
  MovingObject.call(this, name)
}
// Asteroid.inherits(MovingObject);

const ship = new Ship("Shippy");
const ast = new Asteroid("Haley");

ship.fly(100)
ast.fly(1000)