function tentukanDeretAritmatika(arr) {
    var aritmatika = true;
    var data = Math.abs(arr[0] - arr[1]);
    for (var i = 0; i < arr.length - 1; i++) {
      if (data !== Math.abs(arr[i] - arr[i+1])) {
        aritmatika = false;
      }
    }
    return arr[i];
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false