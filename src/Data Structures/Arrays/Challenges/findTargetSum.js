//Implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value. If no such pair found then simply return false.

//Brute Force
//O(n^2) as there is nested loop. We iterate n times over the entire array of length n
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

//Sort the array , then perform binary search
//Assuming sorting takes O(nlogn) here, binary search will take O(nlogn), so overall time complexity is O(nlogn)
function findSum2(arr, value) {
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]
    let search = value - curr
    if (binarySearch(i, arr, search)) {
      return [curr, search]
    }
  }
  return false
}

function binarySearch(index, arr, search) {
  let left = index
  let right = arr.length - 1
  let found = false
  while (left <= right && !found) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] < search) {
      left = middle + 1
    } else if (arr[middle] > search) {
      right = middle - 1
    } else {
      found = true
    }
  }
  return found
}

//moving Indices or two pointers
//Assuming sorting takes O(nlogn), IN the worst case, entire array iterated from opposite ends would take O(n), so this solution is in O(nlogn)
function findSum3(arr, value) {
  arr.sort((a, b) => a - b)

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
  return false
}

console.log(findSum1([1, 21, 3, 14, 5, 60, 7, 6], 81))
console.log(findSum3([1, 21, 3, 14, 5, 60, 7, 6], 81))
console.log(findSum2([1, 21, 3, 14, 5, 60, 7, 6], 81))
console.log(findSum1([1, 21, 3, 14, 5, 60, 7, 6], 21))
console.log(findSum3([1, 21, 3, 14, 5, 60, 7, 6], 21))
console.log(findSum2([1, 21, 3, 14, 5, 60, 7, 6], 21))
