function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line
  let cl = collection.length
  this.push = function (item) {
    if (cl === 0) {
      return collection[0] = item
    } else if (cl > 0) {
      collection[cl] = item
    }
  }

  this.pop = function () {
    // if (cl === 0) {
    //   return undefined
    // } else if (cl > 0) {
    //   let popelement = collection[cl - 1]
    //   collection[cl - 1] = undefined
    //   return popelement
    // }
    return collection.pop()
  }

  this.peek = () => collection[0]

  this.isEmpty = () => cl === 0

  this.clear = () => collection = []
  // Only change code above this line
}