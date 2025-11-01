// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === 1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Outcomes
[1, 2, 3, 2], [9, 1, 4, 4];

//TODO Frequency Counter
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
}

same([1, 2, 3, 5], [1, 4, 9, 11]);

//TODO Anagrams Challenge with Frequency Counter
// "Given two strings, write a function to determine if the second string is an anagram of the first. (An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman)."
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  // First Loop
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exist -> Increment, otherwise set tot one
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // Second Loop
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // Can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] - +1;
    }
  }
  return true;
}

// {
//   a: 3
//   n: 1
//   g: 1
//   r: 1
//   m: 1
// }

validAnagram("anagram", "nagaram");
