// Write a function which takes two numbers and return their sum

// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  // do something
}

function charCount(str) {
  // Make object to return at end
  // Loop over string, for each character...
  //~~~~~ if the char is a number/letter AND is a key in object, add one to count
  //~~~~~ if the char is a number/letter AND not in object, add it to object and set value to 1
  //~~~~~ if character is something else (space, period, etc.) don't do anything
  // Return object at end
}

function charCount(str) {
  // Make object to return at end
  var result = {};

  // Loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  // Return object at end
}

// First Solution
function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    // Regular Expression
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// Second Solution - using numeric code
