function angkaPalindrome(num) {
    // you can only write your code here!
  var data = '';
  
  for(var i = num.length; i < 0;i++){
  data = data + num[i]
  }
  return data
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001