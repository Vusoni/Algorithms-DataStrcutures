// The function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value if it is, return the index at which the element is found.
// If the value is never found, return -1

function linearSearch(arr, val) {
  for(var i = 0; i <  arr.length; i++) {
    if(arr[i] === val) return i; // return index
  }
  return -1
}

linearSearch([34, 12, 1, 64, 2], 1) // It should return index 2 looking for val (1)