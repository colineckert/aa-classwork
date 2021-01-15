const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {

  function getNumber(answer) {
    // sum += parseInt(answer);
    sum += 1;
  }

  while (numsLeft > 0) {
    reader.question("Enter number", getNumber);
    console.log(3)
    numsLeft--;
  }
  
  return completionCallback(sum);
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

reader.close();
process.exit();