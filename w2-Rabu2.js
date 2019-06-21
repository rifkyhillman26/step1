console.log('LOOPING PERTAMA')

var flag = 1;
while(flag <= 20) {
  console.log(flag + ' - I love codding');
  flag++; 
}

console.log('LOOPING KEDUA')

var flag = 20
while(flag >= 1){
  console.log(flag + ' - I will become fullstack developer')
  flag--;
}



console.log('LOOPING PERTAMA')

var row = 1;

while(row <= 20) {
  if(row % 2 == 0) {
    console.log(row + ' - I love coding')
  }
  row = row + 1
}

console.log('LOOPING KEDUA')

var row = 20;

while(row >= 1) {
  if (row % 2 == 0) {
    console.log(row + ' - I will become fullstack developer')
}
 row--;
} 

// for(var i = 1; i <= 100; i = i + 1) {
//   if(i % 2 == 0) {
//     console.log("Genap")
//   } else {
//     console.log("Ganjil")
//   }
// }

for(var i = 1; i <= 100; i = i + 1) {
  if(i % 3 === 0) {
    if (i % 6 === 0) {
      console.log(i + " kelipatan 6")
    } else {
      console.log(i + " kelipatan 3")
    }
  }
}