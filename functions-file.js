// Named Function
function namedFunction(num){
    return num%2===0;
}
console.log("Named Function");
console.log(namedFunction(24));
console.log(namedFunction(25));
console.log("-----------------------------");


// Anonymous Function
const anonymousFunction=function (a,b) {
    return a+b;
}

console.log("Anonymous Function");
console.log(anonymousFunction(25,25));
console.log(anonymousFunction(25,-27));
console.log("-----------------------------");

// Arrow Function
const arrowFunction=(a,b)=>{
    return a*b;
}

console.log("Arrow Function");
console.log(arrowFunction(25,25));
console.log(arrowFunction(25,-27));
console.log("-----------------------------");

// Immediately Invoked Function Expression
// Execute Immediately upon definition, Helps to create private scope. Preventing variable leaking into global scope
console.log("Immediately Invoked Function Expression (IIFE)");
(function() {
    console.log("IIFE Executed 1");
})();
(()=> {
    console.log("IIFE Executed 2");
})();
console.log("-----------------------------");

// Higher Order Function
// A function that accepts another function as an argument or returns a function as a result. e.g. map(),filter(),reduce()
const numbers=[1,2,3,4,5,6,7,8];
const doubleNumbers= numbers.map(function(number) {
    return number*2;
});
const numLessTen=numbers.filter(function(number) {
    return number<10;
});
const sumOfNumbers=numbers.reduce(function(sum, number) {
    return sum+number;
})
console.log("Higher Order Function");
console.log(doubleNumbers);
console.log(numLessTen);
console.log(sumOfNumbers);

console.log("-----------------------------");

// Callback Function
// A function passed as an argument to another function, to be executed inside that function. Async Functions.
// setTimeout(),setInterval(),map(),filter(),reduce()
function greet(name,callback) {
    console.log("Hi"+" "+name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}
console.log("Callback Function");
greet('Harry',callMe);
console.log("-----------------------------");


// Generator Function
// A special type of function that can be paused and resumed during its execution, yielding values at each
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
const generator=generateSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// Async Function
// A function that can be paused and resumed during its execution, yielding values at each pause.
// Functions that returns a Promise and use Await to pause execution until Promise is resolved.
async function fetchDataAsync() {
    let data=await fetch('https://jsonplaceholder.typicode.com/users');
    data=await data.json();
    return data;
}

fetchDataAsync().then(data=>{
    console.log(data);
});