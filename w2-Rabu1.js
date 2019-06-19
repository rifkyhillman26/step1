var word1 = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word1 + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);


var word2 = 'wow JavaScript is so cool';
var FirstWord = word2[0] + word2[1] + word2[2]
var secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13]; 
var thirdWord = word2[15] + word2[16]; 
var fourthWord = word2[18] + word2[19]; 
var fifthWord = word2[21] + word2[22] + word2[23] + word2[24]; 

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


var word3 = 'wow JavaScript is so cool';
var FirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 13); 
var thirdWord3 = word3.substring(15, 17); 
var fourthWord3 = word3.substring(18, 20); 
var fifthWord3 = word3.substring(21, 25); 

console.log('First Word: ' + FirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);


var word4 = 'wow JavaScript is so cool';
var FirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14);
var thirdWord4 = word4.substring(15, 17); 
var fourthWord4 = word4.substring(18, 20);
var fifthWord4 = word4.substring(21, 25);

var firstWordLength = FirstWord4.length;
var secondWordlength = secondWord4.length;
var thirdWordlength = thirdWord4.length;
var fouthWordlength = fourthWord4.length;
var fifthWordlength = fifthWord4.length;

console.log('First Word: ' + FirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordlength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordlength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fouthWordlength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordlength);

