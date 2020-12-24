function bubbleSort(arr) {
  // Only change code below this line
  let emptyarr = []
  for (let i = 1; i < arr.length; i++) {
    let k = i
    while (arr[k] > arr[k + 1] && k < arr.length) {
      let temp = 0
      temp = arr[k]
      arr[k] = arr[k + 1]
      arr[k + 1] = temp
      k++
    }

    let j = i
    while (arr[j - 1] > arr[j] && j > 0) {
      let temp = 0
      temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
      j--
    }

  }
  return arr
  // Only change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);