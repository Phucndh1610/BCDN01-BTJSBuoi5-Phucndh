var sum = 0;
function soNguyenDuongBeNhat() {
    var i = 0;
    while (sum < 10000) {
        i++;
        sum += i;
    }
    document.getElementById("txtSoNguyenDuong").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}
document.getElementById("btnSoNguyenDuong").onclick = soNguyenDuongBeNhat;