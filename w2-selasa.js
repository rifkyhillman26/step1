
var tanggal = 21;
var bulan = 1;
var bulanFmt = '';
var tahun = 1945;

switch (bulan) {
    case 1:
        bulanFmt = 'Januari'
        break;

    case 2:
        bulanFmt = 'Februari'
        break;

    case 3:
        bulanFmt = 'Maret'
        break;

    case 4:
        bulanFmt = 'April'
        break;

    case 5:
        bulanFmt = 'Mei'
        break;

    case 6:
        bulanFmt = 'Juni'
        break;

    case 7:
        bulanFmt = 'Juli'
        break;

    case 8:
        bulanFmt = 'Agustu'
        break;

    case 9:
        bulanFmt = 'September'
        break;

    case 10:
        bulanFmt = 'Oktober'
        break;

    case 11:
        bulanFmt = 'November'
        break;

    case 12:
        bulanFmt = 'Desember'
        break;

    default:
        bulanFmt = "error"
        break;
}


if (tanggal < 1) { 
    console.log('tanggal error')
} else if (tanggal > 31) {
    console.log('tanggal error')
} else if (bulan < 1 && bulan > 12) {
    console.log('bulan error')
} else if (tahun > 2200 || tahun < 1900) {
    console.log('tahun error')
} else if (tanggal <= 31 && tanggal >= 1) {
    console.log(tanggal + " " + bulanFmt + " " + tahun )
}

