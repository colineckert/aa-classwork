// v1: arguments
function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

// v2 ... operator
function sum2(...args) {
  return args.reduce( (acc, el) => acc + el);
}

console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 4, 5));

// bind with args
// Rewrite your myBind method so that it can take both bind-time arguments and call-time arguments.

// A few examples:

Function.prototype.myBind = function(ctx) {
  const that = this;
  let args = Array.prototype.slice.call(arguments, 1);
  return function() {
    let callArgs = Array.from(arguments);
    return that.apply(ctx, args.concat(callArgs));
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true
// Solve it first using the arguments keyword.

// Within your myBind method, you'll have to define a new, anonymous function to be returned. Be careful: using arguments inside the anonymous function will not give you the arguments passed to myBind, because arguments is reset on every function invocation (just like this).

// That makes sense, because there are two arrays of arguments you care about: the extra arguments passed to myBind, and the arguments passed when the bound function is called.

// Once you've done that, write a second version using the ... rest operator.