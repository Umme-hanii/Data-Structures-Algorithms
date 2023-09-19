const mergeArrays = function (arr1, arr2) {
  let l = 0,
    r = 0
  let result = []
  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] < arr2[r]) {
      result.push(arr1[l])
      l++
    } else {
      result.push(arr2[r])
      r++
    }
  }
  if (l < arr1.length) {
    result = result.concat(arr1.splice(l))
  }
  if (r < arr2.length) {
    result = result.concat(arr2.splice(r))
  }
  return result
}

let arr1 = [1, 3, 4, 5]
let arr2 = [2, 4, 7, 8]

console.log(mergeArrays(arr1, arr2))
console.log(mergeArrays([4, 4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4, 4]))

//ToExecute cd to "Data-Structures-Algorithms/src/Data Structures/Arrays/Challenges" then run "node mergeSortedArrays.js"
