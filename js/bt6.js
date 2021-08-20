function inThe(){
    var divLe = "<div style='background:green ;padding: 10px'><span style='color:white'>Thẻ lẻ</span></div>";
    var divChan = "<div style='background:red ; padding: 10px'><span style='color:white '>Thẻ chẳn</span></div>";
    var content = "";
    for (var i = 1; i <= 10; i++) {
        if(i%2 ==0){
            content += divChan;
        }else{
            content += divLe;
        }
    }
    document.getElementById("txtTaoThe").innerHTML = content;
}
document.getElementById("btnTaoThe").onclick = inThe;