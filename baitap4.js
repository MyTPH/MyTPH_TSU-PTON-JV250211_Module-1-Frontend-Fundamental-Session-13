let inputUser=prompt("Nhập vào một dãy số bất kỳ vào ô này>>");
let numberArray=inputUser.split(",");
let maxNumber=numberArray[0];
for(let i=1;i<numberArray.length;i++){
    if(numberArray[i]>maxNumber){
        maxNumber=numberArray[i];
}
}
alert("Giá trị lớn nhất trong mảng là:"+maxNumber)