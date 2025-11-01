// Problem: Collect all the odd values in an array - Destructed from the array.
function collectedOddValues(arr) {
  let newArr =[]

  if (arr.length === 0){
    return newArr
  }

  if(arr[0] % 2 !== 0){
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectedOddValues(arr.slice(1)))
  return newArr
}


collectedOddValues([1, 2, 3, 4, 5])
[1, 3, 5]
// [1].concat(collectedOddValues[2, 3, 4, 5]) -> Add 1 Odd Value to array
//       [].concat(collectedOddValues[3, 4, 5])
//             [3].concat(collectedOddValues[4, 5]) -> Add 3 Odd Value to Array
//                   [].concat(collectedOddValues[5]) -> Add 5 Odd Value Value to Array