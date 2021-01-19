const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(ele1,ele2,callback) {
  reader.question(`Is ${ele1} greater than ${ele2}?\n`,
                  function(answerString) {
                    if (answerString === "yes") {
                      callback(true);
                    } else {
                      callback(false);
                    }
                  });
}

function innerBubbleSortLoop(arr,i,madeAnySwaps,outerBubbleSortLoop) {
  if(i < arr.length -1) {
    askIfGreaterThan(arr[i],arr[i+1],
                     function(isGreaterThan) {
                       if(true) {
                          const holder = arr[i+1];
                          arr[i+1]     = arr[i];
                          arr[i]       = holder;
                          madeAnySwaps = true;
                       }
                       innerBubbleSortLoop(arr,i+1,)
                     }
                    );
  } else {

  }
}

function absurdBubbleSort() {

}

askIfGreaterThan(2,3, bool => {
  console.log(`response is ${bool}`);
  reader.close();
  process.exit();
});

