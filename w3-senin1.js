function balikKata(kata) {    
    var tampung = ''
    for (var i = kata.length-1;i >= 0 ;i--){
       tampung = tampung + kata[i]
    }
    return tampung
    }
    console.log(balikKata('hello world!'))