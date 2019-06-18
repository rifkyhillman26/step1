var nama = 'Nina';
var peran ='Ksatria';

if (nama == '') {
  console.log('Nama Harus diisi')
}
else if (nama == 'Mikael' && peran == '') {
  console.log('Halo Mikael pilih peranmu untuk memulai game')
} else if (nama == 'Nina' && peran == 'Ksatria') {
    console.log("Selamat datang di Dunia Proxytia, Nina")
    console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!")
}else if (nama == 'danu' && peran == 'tabib') {
    console.log("Selamat datang di Dunia Proxytia, Danu")
    console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.")
}else if (nama == 'zero' && peran == 'penyihir') {
    console.log("Selamat datang di Dunia Proxytia, Zero")
    console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!")
}