function tinhTong(){
    var x = parseInt(document.getElementById("inputX").value);
    var n = parseInt(document.getElementById("inputN").value);
    var sum = 0;
    for (var i = 1; i <= n ; i++) {
        sum += Math.pow(x,i); 
    }
    document.getElementById("txtTong").innerHTML = "Tổng: " + sum;

}
document.getElementById("btnTong").onclick = tinhTong;