function changeMe(arr) {
    // you can only write your code here!
    var data = {};
      data.firstName = arr[0][0];
      data.lastName = arr[0][1];
      data.gender = arr[0][2];
      if(arr[0][3] === undefined){
        data.age = 'Invalid Birth Year';
      }else if (arr[0][3] > 2019){
        data.age = 'Invalid Birth Year';
      }else{
        data.age = 2019 - arr[0][3];
      }
     var data2 = {};
      data2.firstName = arr[1][0];
      data2.lastName = arr[1][1];
      data2.gender = arr[1][2];
      if(arr[1][3] === undefined){
        data2.age = 'Invalid Birth Year';
      }else if(arr[0][3] > 2019){
        data.age = 'Invalid Birth Year';
      }else {
        data2.age = 2019 - arr[1][3];
      }
    console.log('1, Christ Evans')
    console.log(data)
    console.log('2. Robert Downey')
    console.log(data2)
  }
  
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 2020], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }