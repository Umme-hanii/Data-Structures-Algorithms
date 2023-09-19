//Implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value. If no such pair found then simply return false.

//Brute Force
function findSum1(arr, value) {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === value) {
        return [arr[i], arr[j]]
      }
    }
  }
  return false
}

//moving Indices or two pointers
function findSum3(arr, value) {
  arr = arr.sort((a, b) => a - b)

  let l = 0,
    r = arr.length - 1
  while (l < r) {
    let left = arr[l]
    let right = arr[r]
    let sum = left + right
    if (sum < value) {
      l++
    } else if (sum > value) {
      r--
    } else {
      return [left, right]
    }
  }
  return []
}

console.log(findSum1([1, 21, 3, 14, 5, 60, 7, 6], 81))
console.log(findSum3([1, 21, 3, 14, 5, 60, 7, 6], 21))
