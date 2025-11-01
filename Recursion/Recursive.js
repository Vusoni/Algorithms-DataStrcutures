// Recursive Function - A function that calls itself and have "Base Case and Different input"
function countDown(num) {
  if(num <= 0) { // Base Case 
    console.log("All Done!");
    return // Must be in order to stop continue keep going
  }
  console.log(num);
  num--
  countDown(num) // Recursive call
}


countDown(5)




// Second Recursion Function
function sumRange(num) {
  if(num === 1) return 1 // Base Case
  return num + sumRange(num - 1) // Recursive call
}

sumRange(4) // 10

// Results are waiting for return



//TODO Recursively Factorial
// Factorial Number "4!" (4 * 3 * 2 * 1)

// function factorial(num) {
//   let total = 1
//   for (let i = num; i > 0; i--){
//     total *= 1
//   }
//   return total
// }


function factorial(num) {
  // I don't want to multiple by 0
  if(num === 1) return 1
  return num * factorial(num - 1)
}

factorial(3)

//TODO Helper Method Recursion
function collectedOddValues(arr){

  // External Result 
  let result = []

  // Recursion Function 
  function helper(helperInput) {
    if(helperInput.length === 0){
      return
    }

    if (helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)

  return result
}

collectedOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])





// function outer(input) {

//   var outerScopedVariable = []

//   function helper(helperInput){
//     // modify the outerScopedVariable
//     helper(helperInput--)
//   }

//   helper(input)

//   return outerScopedVariable
// }
