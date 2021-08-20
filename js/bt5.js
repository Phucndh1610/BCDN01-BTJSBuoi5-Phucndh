function giaiThua(){
    var n = parseInt(document.getElementById("inputGiaiThua").value);
    var sum = 1;
    for (var i = 1; i <= n; i++) {
        sum *= i;  
    }
    document.getElementById("txtGiaiThua").innerHTML = "Giai thừa: " + sum;
}
document.getElementById("btnGiaiThua").onclick = giaiThua;