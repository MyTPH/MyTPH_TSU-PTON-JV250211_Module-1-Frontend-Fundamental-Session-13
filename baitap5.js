let numbers=[];
for(let i=0;i<10;i++){
    let randomNumber=Math.floor(Math.random()*100);
    numbers.push(randomNumber);
}
let evenSum=0;
let oddSum=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
    evenSum+=numbers[i];
}else{
    oddSum+=numbers[i];
}
}
alert("Tổng các số chẵn:"+evenSum);
alert("Tổng các số lẻ:"+oddSum);
