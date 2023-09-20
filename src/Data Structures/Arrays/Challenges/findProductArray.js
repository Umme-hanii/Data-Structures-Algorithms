//Iterate over the array two times.
//O(n^2)
function findProduct1(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let product = 1
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) product *= arr[j]
    }
    result.push(product)
  }
  return result
}

//O(n), as we are iterating over the entire array two times seperately
function findProduct2(arr) {
  let result = [],
    product = 1
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i]
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(product / arr[i])
  }

  return result
}

console.log(findProduct1([1, 2, 3, 4]))
console.log(findProduct1([2, 5, 9, 3, 6]))
console.log(findProduct2([1, 2, 3, 4]))
console.log(findProduct2([2, 5, 9, 3, 6]))
