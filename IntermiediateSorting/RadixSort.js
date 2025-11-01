/* 
--- Helper functions ----
10 getDigit(num, place) that returns the digit in num at the given place value
2) digitCount(num) -> returns the number of digits in num
3) mostDigits(nums) -> Given an array of numbers, returns the number of digits in the largest numbers in the list


*/


function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10 
}

getDigit(7323,2) // 7323 -> 7.3 (Math Floor) 


function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) +1
}

digitCount(21388)


function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

mostDigits([23, 567, 89, 12234324, 90])



//TODO Radix Sort 
/* 
1. Define a function that accepts list of numbers
2. Figure out how many digits the largest number has (Helper most digits function above )
3. Loop from k = 0 up to this largest number of digits
4. For each iteration of the loop:
      - Create buckets of each digit (0 to 9)
      - Places each number in the corresponding bucket based on its kth digit
5. Replace my existing array with values in my buckets, starting with 0 and going up to 9
6. Return list at the end!
*/


function RadixSort(nums) { // 1.
  let maxDigitsCount = mostDigits(nums) // 2.

  // Get access to index k
  for (let k = 0; k < maxDigitsCount; k++){ // 3.
    let digitBuckets = Array.from({length: 10}, () => [])  // 3.1 - Ten Buckets 
    for(let i = 0; i < nums.length; i++){ // 3.2 - Loop through each number

      // 4. Stage
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets) // 5. Spread over 
  }
  return nums // 6.
}

RadixSort([23, 214, 21, 4124, 5313, 121])