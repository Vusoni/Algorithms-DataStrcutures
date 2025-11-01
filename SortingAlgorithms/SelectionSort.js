// Store the first element as the smallest value i've seen so far.
// Compare this item to the next item in the array until I find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) i initially began with, swap the two values
// Repeat this with the next element until the array is sorted



function selectionSort(arr) {

  // Swap 
  const swap = (arr, idx1, idx2) => 
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx2]])
  

  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if (i !== lowest) swap(arr, i ,lowest) // Swap values
  }
return arr // Return sorted array
}

selectionSort([34, 22, 19, 10, 17])






// function selectionSort(arr) {
//   for(var i = 0; i < arr.length; i++){
//     var lowest = i // make lowest value
//     // go 1 higher of whatever i is
//     for(var j = i + 1; j < arr.length; j++){
//       if(arr[j] < arr[lowest]) {
//         lowest = j
//       }
//     }
//     if(i !== lowest){
//       var temp = arr[i]
//       arr[i] = arr[lowest]
//       arr[lowest] = temp
//     }
//   }
//   return arr
// }

// selectionSort([34, 22, 19, 10, 17])


