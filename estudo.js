function mat(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = 0;
    for(let i=1; i<=t;i++){
       r = v * (1+(j/100));
       v = r;
    }
 
    document.write("resultado " + r);
}
