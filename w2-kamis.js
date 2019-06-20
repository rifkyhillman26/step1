function shoutOut(kata = '"Halo Function!"') {
    return kata
  }
  
  console.log(shoutOut()) 



  function hasilperkalian(num1, num2) {
    return num1 * num2
  }
  
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = hasilperkalian(num1,num2);
  
  console.log(hasilPerkalian);



  function fullsentence(name, age, addres, hobby) {
    return name + age + addres + hobby
  }
  
  var name = '"Nama saya Agus, ';
  var age = 'umur saya 30 tahun,';
  var address = ' alamat saya di Jln. Malioboro, Yogjakarta, ';
  var hobby = 'dan saya punya hobby yaitu gaming!"';
  
  var fullSentence = fullsentence(name,age,address,hobby);
  console.log(fullSentence);