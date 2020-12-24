function pairwise(arr, arg) {
  if (arr.length > 0) {
    let emptyarr = []
    arr.forEach((number, index) => {
      if (arr.indexOf(arg - number, index + 1) > -1) {
        emptyarr.push(index, arr.indexOf(arg - number, index + 1))
        delete arr[index];
        delete arr[arr.indexOf(arg - number)];
      }
    })

    let sum = emptyarr.reduce((a, b) => a + b)

    return sum;
  } else {
    return 0
  }
}

pairwise([], 100);