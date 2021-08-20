function soChiaHet3(){
    var count = 0;
    // for (var i = 0; i < 1000; i++) {
    //     if(i%3 ==0){
    //         count += 1;
    //     }  
    // }
    var i = 0; 
    while(i < 1000){
        if(i%3 ==0){
            count += 1;
        }  
        i++;
    }
    document.getElementById("txtSoChiaHet3").innerHTML = "Số chia hết cho 3 và nhỏ hơn 1000: " + count + " số";
}
document.getElementById("btnSoChiaHet3").onclick = soChiaHet3;