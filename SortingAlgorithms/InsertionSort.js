// Start by picking the second element in the array
// Compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
// Repeat until the array is sorted


function insertionSort(array) {

  for(var i = 1; i < arr.length; i++){

    var currentValue = arr[i]
    // Work backwards
    for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
     arr[j+1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr 
}


insertionSort([2, 1, 9, 27, 4])
