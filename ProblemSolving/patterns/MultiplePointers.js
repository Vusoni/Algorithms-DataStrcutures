// "Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist" -> Sorted? - Good
// Found a match for negative and positive that will be equal 0 [-3, 3]

function sumZero (arr){
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5])


// TODO Refactor 
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while(left < right ) {
    let sum = arr[left] + arr[right]
    if(sum === 0){
      return [arr[left], arr[right]]
    } else if(sum > 0) {
      right--
    } else {
      left++
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])


//TODO Multiple Pointers
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in array, but it will always be sorted.
// Return values if not duplicated
// Moving pointers 'i' and 'j'
// Add 1 because the index starts with zero 0

function countUniqueValues(arr) {
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){   // j = index of [0] 
    if(arr[i] !== arr[j]) {
      i++ // adds 1 to i
      arr[i] = arr[j] // Replace "i" pointer with "j" pointer value 
    }
  }
  return i + 1
}


countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])