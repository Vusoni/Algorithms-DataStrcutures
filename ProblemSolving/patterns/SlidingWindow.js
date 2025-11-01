// Write a function called maxSubarraySum which accepts an array of integers and a number called "n". 
// The function should calculate the maximum sum of "n" consecutive elements in the array.



//TODO Sliding Window
// Move a window depend on condition 

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < sum) return null // if it's and end of array (last number)
  for (let i = 0; i < num; i++) { // if i is less than user's num
    maxSum += arr[i] // add i to max sum
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i] // Subtracting first index and adding new index to keep moving forward
    maxSum = Math.max(maxSum, tempSum) // pick only max sum
  }
  return maxSum
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3,], 2) // 15 (6 + 9)
maxSubarraySum([5, 1, 9, 8, 2], 3) // 19 (9 + 8 + 2)
maxSubarraySum([4, 1, 6, 2, 1], 1) // 6