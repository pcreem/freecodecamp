function updateInventory(arr1, arr2) {

  let arr1val = arr1.map(item => item[1])
  let arr2val = arr2.map(item => item[1])

  arr2val.forEach((item, i) => {
    let ar1in = arr1val.indexOf(item)

    if (ar1in !== -1) {
      arr1[ar1in][0] += arr2[i][0]
    } else {
      arr1.push([arr2[i][0], item])
    }
  })

  arr1.sort(function (a, b) {
    var nameA = a[1].toUpperCase(); // ignore upper and lowercase
    var nameB = b[1].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  console.log(arr1)
  return arr1;
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

updateInventory(curInv, newInv);