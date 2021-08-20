function ktSNT(so) {
    if (so < 2) {
        return false;
    }
    for (var i = 2; i < so; i++) {
        if (so % i == 0) {
            return false;
        }
    }
    return true;
}
function inSo() {
    var n = parseInt(document.getElementById("inputSoN").value);
    var soNguyenTo = "";
    for (var i = 1; i <= n; i++) {
        if (ktSNT(i)) {
            soNguyenTo += i + " ";
        }
    }
    document.getElementById("txtInso").innerHTML = soNguyenTo;
}
document.getElementById("btnInSo").onclick = inSo;