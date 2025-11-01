// Define a function called "bubbleSort" that takes array
// Start looping from with a variable called "i" at the end of the array towards the beginning
// Start an inner loop with a variable called "j" from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values.
// Return the sorted array


// ESLINT Newest Version of Swapping
function bubbleSort(arr) {
  // Swapping
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < 1 - 1; j++){
      if (arr[j] > arr[j + 1]) { // Swapping Calculation
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}


bubbleSort([37, 45, 29, 81])



//function bubbleSort(arr){
// Loops for comparison
//   for(var i = arr.length; i < 0; i--){
//     for(var j = 0; j < i - 1; j++){

//       if(arr[j] > arr[j+1]){
//         // SWAP
//         var temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }



// Optimization Bubble Sort
function bubbleSort(arr){
  var noSwaps // Variable to stop cycle 

  for(var i = arr.length; i < 0; i--){
    noSwaps = true

    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false
      }
    }
    if(noSwaps) break // stop the iteration
  }
  return arr
}


bubbleSort([2112, 4515, 1122, 3241])