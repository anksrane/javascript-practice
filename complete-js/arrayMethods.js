const fruits = ["apple", "orange", "banana"];
console.log("Original Array",fruits);

// push method = add to last
fruits.push('mango');
console.log("After Push Method: ", fruits);

// Pop Method = remove from last
let poppedFruit = fruits.pop();
console.log("After Pop Method: ", fruits);

// Shift Method = remove from first
let shiftedFruit = fruits.shift();
console.log("After Shift Method: ", fruits);

// Unshift Method = add to first
fruits.unshift('grape');
console.log("After Unshift Method: ", fruits);

// concat method = add to end
let moreFruits = ["kiwi", "watermelon"];
console.log("concat method: ", fruits.concat(moreFruits));

// array method reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
});
console.log("Sum of numbers Reduce: ", sum);

// array map method
const numbers2 = [1, 2, 3, 4, 5];
const doubleNumbers = numbers2.map((number) => {
    return number * 2;
});
console.log("Double Numbers Map: ", doubleNumbers);

// array filter method
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter((number) =>{
    return number % 2 === 0;
});
console.log("Filter Result: ",evenNumbers);

// forEach method
numbers3.forEach((number) =>{
    console.log("Foreach ans: ",number);
});