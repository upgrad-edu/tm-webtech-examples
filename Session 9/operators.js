console.log("////////////////operators.js///////////////");

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(5 % 5);
console.log(5 ** 5);

var x = 5;
console.log(x, x++, x);
console.log(x, ++x, x);
console.log(x, x--, x);
console.log(x, --x, x);

var y = 7;
var z = y;
console.log(y, z);
console.log(y += 5);
console.log(y -= 5);
console.log(y *= 5);
console.log(y /= 5);
console.log(y %= 5);
console.log(y **= 5);

console.log("100 + 50 * 3 ", 100+50*3);

var num1 = 2;
var num2 = 3;
var num3 = "2";
console.log("num1 == num2 ", num1 == num2);
console.log("num1 == num3 ", num1 == num3);
console.log("num1 === num3 ", num1 === num3);
console.log("num1 != num3 ", num1 != num3);
console.log("num1 !== num3 ", num1 !== num3);
console.log("num1 > 0 ", num1 > 0);
console.log("num1 > 2 ", num1 > 2);
console.log("num1 >= 2 ", num1 >= 2);
console.log("num1 < 10 ", num1 < 10);
console.log("num1 <= 10 ", num1 <= 10);
console.log(num1 > 5 ? "Number is greater than 5" : "Number is lesser than 5")
console.log((num1 > 0 && num1 < 10) ? true : false);
console.log((num1 == 5 || num1 < 10) ? true : false);
console.log(!(num1 === 2));

