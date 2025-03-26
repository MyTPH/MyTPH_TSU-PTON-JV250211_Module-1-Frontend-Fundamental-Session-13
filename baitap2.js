let number=[10,12,19,97,64,36,63,45];
while(true){
let answer=prompt("Please input your number or exit>>");
if(answer==="exit"){
    alert("Game over");
    break;
}
let num=Number(answer);
if(isNaN(num)){
    alert("Please input exactly number>>");
    continue;
}
if(number.includes(num)){
    alert("Bingo");
}else{
    alert("Chúc bạn may mắc lần sau");
}
}