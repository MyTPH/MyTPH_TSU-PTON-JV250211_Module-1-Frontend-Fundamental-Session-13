let inputUser=prompt("Nhập vào một dãy số bất kỳ vào ô này>>");
let numberArray=inputUser.split(",");
numberArray.reverse();
let result="";
for(let i=0;i<numberArray.length;i++){
    result+=numberArray[i];
    if(i<numberArray.length-1){
        result+=",";
    }
}
alert("Mảng sau khi đảo ngược:"+result);