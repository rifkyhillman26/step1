var row = 5;

for(var i = 1; i <= row; i = i + 1) {
  console.log('*')
}


var row2 = 5;

for(var a = 1; a <= row2; a = a + 1) {
  var bintang = ''
  for(var b = 1; b <= row2; b++) {
    bintang = bintang + "*"
  }
  console.log(bintang)
} 

var row2 = 5;

for(var a = 1; a <= row2; a = a + 1) {
  var bintang = ''
  for(var b = 1; b <= a; b++) {
    bintang = bintang + "*"
  }
  console.log(bintang)
} 