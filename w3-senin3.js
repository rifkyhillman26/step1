function dataHandling2(arr){
    var tgl = arr[3].split('/')
    var bln = ''
  
    switch (tgl[1]){
      case '01':
          bln = 'Januari'
          break;
  
      case '02':
          bln = 'Februari'
          break;
  
      case '03':
          bln = 'Maret'
          break;
  
      case '04':
          bln = 'April'
          break;
  
      case '05':
          bln = 'Mei'
          break;
  
      case '06':
          bln = 'Juni'
          break;
  
      case '07':
          bln = 'Juli'
          break;
  
      case '08':
          bln = 'Agustu'
          break;
  
      case '09':
          bln = 'September'
          break;
  
      case '10':
          bln = 'Oktober'
          break;
  
      case '11':
          bln = 'November'
          break;
  
      case '12':
          bln = 'Desember'
          break;
  
      default:
          bln = "error"
          break;
    }
        
    arr[1] = arr[1] + " ELsharawy"
    arr[2] = "Provinsi " + arr[2]
    arr.splice(4, 5, "pria","SMA Internasional metro")
  
  
    console.log (arr)  
    console.log(bln)
    console.log([tgl[2], tgl[0], tgl[1]])
    console.log(tgl.join('-'))
    console.log(arr[1].substr(0, 14))
    return ''
  }
  
  
  var data = ["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"]
  
  console.log(dataHandling2(data))
  