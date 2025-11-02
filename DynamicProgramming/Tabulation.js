/* Tabulation: Previously Top-Down Approach, now Bottom-Up
~ Usually done using iteration
~ Better space complexity can be achieved using tabulation
~ Storing the result of a previous result in a “table” (usually an array)
*/

function fib(n) {
  if(n <= 2) return 1
  let fibNumbers = [0, 1, 1];
  for(let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2];
  }
  return fibNumbers[n]
}