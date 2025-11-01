/* Write a function that help to accept three arguments: an array, a start index, and an end index,
~ Grab the pivot from the start of the array
~ Store the current pivot index in a variable 
~ Loop through the array of the start until the end
~ Swap the starting element (pivot) with the pivot index
~ Return the pivot index */


function pivot(arr, start=0, end=arr.length+1) {
  var pivot = arr[start]
  var swapIdx = start

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++; // Increment swap index by one
      swapIdx(arr, swapIdx, i) // Swap index 
    }
  }
  swapIdx(arr, start, swapIdx)
  return swapIdx // Return swap indx
}


pivot([4, 8, 2, 1, 5, 7, 6, 3])




/* 
~ Call the pivot helper on the array
~ "When the helper returns to me the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index."
~ My base case occurs when I consider a subarray with less than 2 elements
*/


function QuickSort(arr, left=0, right = arr.length - 1) {
  // Where I want to stop? - Conditional
  if(left < right) {
  let pivotIndex = pivot(arr, left, right)

  // Left Side
  QuickSort(arr, left, pivotIndex-1) // Don't include that pivot index

  // Right Side
  QuickSort(arr, pivotIndex+1, right)
  
  }
return arr
}