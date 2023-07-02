function Click(){
    let output=document.querySelector('.Binary')
    let result=calculate(output.value);
    document.querySelector('.Decimal').innerHTML = result;
}

function calculate(number){
    let result = 0;
    let count=0;
while(number>0){
    // Getting the rightmost digit
    rightmost = number%10;
    result += rightmost===0 ? 0 : Math.pow(2,count);
    count++;
    // Removing the rightmost digit from the number
    number = Math.floor(number/10);
}
return result;
}