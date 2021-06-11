/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // Setup the pointers and other variables we will need
  let left = 0;
  let right = 0;
  let stringLength = s.length;
  let currWindowMap = {};
  let numMatchedCharsInCurrentWindow = 0;

  // This variable is used to return our eventual answer...
  // think of it as [currentLeftPosition, currentRightPosition, smallestKnownResultLength]
  let currMinRangeAndLength = [0, stringLength - 1, Infinity];

  // Null check
  if (stringLength < t.length) return '';

  // Make a map of the characters we're looking for
  let initialMap = makeCharMap(t, 0);
  let charsToMatchMap = initialMap.map;

  // Count how many characters we are looking for
  let numCharsToMatch = initialMap.count;

  // The while loop handles iteration of the entire input string
  while (right < stringLength) {

    // Grab the string character
    let currChar = s.charAt(right);

    // Record the current character to the currWindowMap
    if (!currWindowMap[currChar]) {
      currWindowMap[currChar] = 1;
    } else {
      currWindowMap[currChar]++;
    }

    // If the current character we are evaluating IS a character we are looking for
    // AND we have the exact quantity of this character with our current window then
    // increment our count of matched characters
    if (
      charsToMatchMap[currChar] &&
      currWindowMap[currChar] === charsToMatchMap[currChar]
    ) {
      numMatchedCharsInCurrentWindow++;
    }

    // At this point we have a valid window and need to DECREASE the size of the 
    // window until it is no longer valid
    while (
      numMatchedCharsInCurrentWindow === numCharsToMatch &&
      left <= right
    ) {
      let currLeftChar = s.charAt(left);

      let potentialMinWindowLength = right - left + 1;
      if (potentialMinWindowLength < currMinRangeAndLength[2]) {
        currMinRangeAndLength = [left, right, potentialMinWindowLength];
      }

      currWindowMap[currLeftChar]--;

      // Check the validity of a narrowing string
      // If the map of characters in the current window is less than the quantity we need
      // to find (ie the charsToMatchMap) then we no longer have a valid window and need to
      // decrement our count of the matched characters within the current window 
      // (this breaks out of this inner while loop)
      if (
        charsToMatchMap[currLeftChar] &&
        currWindowMap[currLeftChar] < charsToMatchMap[currLeftChar]
      ) {
        numMatchedCharsInCurrentWindow--;
      }

      left++;
    }

    right++;
  }

  // If our minimum length is still Infinity then we did not find a valid answer 
  // and should return an empty string
  if (currMinRangeAndLength[2] === Infinity) return '';

  // Otherwise we DID find a valid answer and we use our references to the smallest
  // known indices to return the substring
  return s.slice(currMinRangeAndLength[0], currMinRangeAndLength[1] + 1);
};

makeCharMap = (string, charsCount) => {
  let map = {};
  for (const char of string) {
    if (!map[char]) {
      map[char] = 1;
      // NOTE: We only increment ONCE, when the character is undefined. Incrementing for each
      // character leads to difficult handling of corner cases such as "aaaa" & "aaaa" as inputs
      charsCount++;
    } else {
      map[char]++;
    }
  }

  return { map: map, count: charsCount };
}


// @lc code=end

