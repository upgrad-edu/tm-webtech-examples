let numbers = [20, 3, 14, 6, 90, 11, 6];

console.log(numbers);

let twice = numbers.map(num => {
    return num * 2;
})

console.log(twice);

let greaterThan15 = numbers.filter(num => {
    return num > 15;
})

console.log(greaterThan15);

let addition = numbers.reduce((total, num) => {
    return total+=num;
})

console.log(addition);

console.log('/*********** Spread Operator **********/');

let a = 5;
console.log("a  ", a);
let b = a;
console.log("b  ", b);
a = 10;
console.log("a  ", a);
console.log("b  ", b);

let arr1 = [2, 3, 4, 5];
console.log("arr1   ", arr1);
let arr2 = arr1;
console.log("arr2   ", arr2);
arr1[2] = 10;
console.log("arr1   ", arr1);
console.log("arr2   ", arr2);
let arr3 = [...arr1];
arr1[1] = 6;
console.log("arr1   ", arr1);
console.log("arr2   ", arr2);
console.log("arr3   ", arr3);


console.log("/********* Rest Parameter *********/");

const multiply = (multiplier, ...numbers) => {
    return numbers.map(num => {
        return multiplier * num;
    })
}

console.log(multiply(3, 4, 5, 6));

console.log("/******* Tempelate Literals *********/");

let age = 25;
let name = "John Doe";

let text = `His name is ${name} and his age is ${age}.`;
console.log(text);