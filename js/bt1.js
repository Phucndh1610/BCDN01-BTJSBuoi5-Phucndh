function timSo() {
    var soChan = "";
    var soLe = "";
    // vòng for
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += i + " ";
        } else {
            soLe += i + " ";
        }
    }
    // vòng while
    // var i = 0;
    // while(i < 100) { 
    //     if (i % 2 == 0) {
    //         soChan += i + " ";
    //     } else {
    //         soLe += i + " ";
    //     }
    //     i++;
    // }

    document.getElementById("txtKetQua").innerHTML ="Số chẳn: "+ soChan + "<br>" + "Số lẻ: "+ soLe;
}

document.getElementById("btnKetQua").onclick = timSo;