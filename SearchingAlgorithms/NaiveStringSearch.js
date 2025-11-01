// Define a function "naiveSearch" that takes 2 strings, larger string and short (pattern)
// Loop over the longer string
// Loop over the shorter string inside the longer loop - Nested Loop
// if the characters do match, keep going
// If i complete the inner loop and find a match, increment the count of matches.

function naiveSearch(long, short) {

  var count = 0

  for(var i = 0; i < long.length; i++){
    for(var j = 0; j < short.length; j++) { // Nested Loop

      // Check if the short string is not equal of long i+j, then break
      if(short[j] !== long[i+j]) break // the j will reset here but i will stay
      if(j === short.length - 1) count++; // Found a match 
      
    }
  }
  return count
}


naiveSearch("lorie smith", "smith")




/*

i: 6
j: 1

*/