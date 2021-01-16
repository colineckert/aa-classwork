const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter number: ", function(numString){
      const num = parseInt(numString);
      sum += num;
      console.log(`Sum is ${sum}`);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function(sum) {
  console.log(`total is: ${sum}`);
  reader.close();
  process.exit();
});