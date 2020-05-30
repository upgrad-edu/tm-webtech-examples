console.log("////////////////number.js///////////////");

var x = 10;
var y = 20;
console.log("The result of x + y is " + x + y);
console.log("The result of x + y is " + (x + y));

var x = "10";
var y = 20;
console.log("The result of \"10\" + 20 is " + (x + y));

var x = "10";
var y = "20";
console.log("The result of \"10\" + \"20\" is ", (x+y));
console.log("The result of \"10\" - \"20\" is ", (x-y));
console.log("The result of \"10\" * \"20\" is ", (x*y));
console.log("The result of \"10\" / \"20\" is ", (x/y));

var x = 100;
console.log("typeof x.toString() is ", typeof x.toString());

var y = 23.45;
console.log("y.toExponential is ", y.toExponential());

var z = 23.4567;
console.log("z.toFixed(2) is ", z.toFixed(2));

var number = 23.456;
console.log("number.toPrecision(3) is ", number.toPrecision(3));

console.log("The value of (100+23).valueOf() is ", (100+23).valueOf());

console.log(Number(true));          // returns 1
console.log(Number(false));         // returns 0
console.log(Number("10"));          // returns 10
console.log(Number("  10"));        // returns 10
console.log(Number("10  "));        // returns 10
console.log(Number(" 10  "));       // returns 10
console.log(Number("10.33"));       // returns 10.33
console.log(Number("10,33"));       // returns NaN
console.log(Number("10 33"));       // returns NaN
console.log(Number("John")); 
console.log(Number(new Date("2017-09-30")));

console.log(parseInt("10"));         // returns 10
console.log(parseInt("10.33"));      // returns 10
console.log(parseInt("10 20 30"));   // returns 10
console.log(parseInt("10 years"));   // returns 10
console.log(parseInt("years 10"));

console.log(parseFloat("10"));        // returns 10
console.log(parseFloat("10.33"));     // returns 10.33
console.log(parseFloat("10 20 30"));  // returns 10
console.log(parseFloat("10 years"));  // returns 10
console.log(parseFloat("years 10"));

function hello() {
    console.log("Hi");
}