// The function accepts a sorted array and a value
// Create lef pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer


// Common Divide and conquer Pattern
function binarySearch(arr, val) {
  let start = 0
  let end = arr.length -1
  // Calculate middle point and round up using "Math.floor"
  let middle = Math.floor((start + end) / 2)

  // While middle is wrong
  while(arr[middle] !== val && start <= end) { // end loop
    if(val < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === val ? middle : -1 // Ternary Operator
}


binarySearch([2, 5, 6, 7, 9, 13, 16, 18, 22, 25, 28], 22)