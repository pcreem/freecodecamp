function selectionSort(array) {
  // Only change code below this line
  const min = Math.min(...array)
  const max = Math.max(...array)
  let emptyarr = []
  let number = min

  while (array.length !== 0 && number <= max) {
    while (array.indexOf(number) !== -1) {
      emptyarr.push(number);
      array.splice(array.indexOf(number), 1)
    }
    number++
  }
  return emptyarr;
  // Only change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);