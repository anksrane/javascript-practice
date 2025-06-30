// Normal Function
function sum(num1,num2){
    return num1+num2;
}
console.log("Normal Function:",sum(3,6));

// Arrow Function with two arguments
var sum = (num1,num2) => {
    return num1+num2;
}
console.log("Arrow Function with two arguments:",sum(9,6));

// Arrow function with no arguments
var sum = () =>{
    return 10+20;
}
console.log("Arrow function with no arguments:",sum());

// Concise arrow functions
var sum = (num1,num2) => num1+num2;
console.log("Concise arrow functions:",sum(10,6));

// Anonymous Functions (This can be funtion expression. but in function expression function, function can have name also)
var sum = function(num1,num2){
    return num1+num2;
}
console.log("Anonymous Function:",sum(8,6));

// Callback Function
const inEven=(n)=>{
    return n%2==0;
}

let printMsg=(evenFunc, num) =>{
    const inNumEven=evenFunc(num);
    console.log(`${num} is an Even Number: ${inNumEven}`);
}

printMsg(inEven,4);
printMsg(inEven,5);