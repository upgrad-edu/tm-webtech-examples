function sum(num1, num2) {
    console.log(arguments);
    return num1 + num2;
}

var result = sum(1, 2);
console.log(result);

var add = function sum(a,b) { return a + b };
var result2 = add(5, 3);
console.log(result2);

var x = (
    function() {
        return 2*4;
    }
) ()
console.log(x);


console.log("******************************");

function countdown(fromNumber) {
    console.log(fromNumber);
    fromNumber = fromNumber - 1;
    if(fromNumber > 0) {
        countdown(fromNumber);
    }
}
countdown(3);

function sumOfDigits(number) {
    if(number === 0) {
        return 0;
    }
    console.log(Math.floor(number/10), number%10);
    return number % 10 + sumOfDigits(Math.floor(number/10));
}

console.log(sumOfDigits(324));

  