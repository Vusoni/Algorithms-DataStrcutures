// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create new array which is also sorted, and consists of all of the elements in the two input arrays


// Create an empty array
// If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array



function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0

  while(i < arr1.length && j < arr2.length) { // Only applies no one division is exhausted
    if(arr2[j] > arr1[i]){
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  // Whatever happens at the end after exhausted then add into the array
  while(i < arr1.length) {
    results.push(arr1[i])
  }

  while(j < arr2.length) {
    results.push(arr2[j])
  }

  return results 
}

/*
~ Break up the array into halves (slice) until you have arrays that are empty or have one element
~ Once I have that smaller sorted arrays, merge those arrays with other sorted arrays until I'm back at the full length of the array
~ Once the array has been merged back together, return the merged (and sorted) array
~ I must use Recursion Function
*/


function mergeSort(arr){
  if(arr.length <= 1) return arr
  // Slicing (Find mid)
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  // Merge back
  return merge(left, right)
}


mergeSort([1, 10, 50], [2, 14, 99, 100])


